import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Marked, type Tokens } from "marked";
import type { BlogFrontmatter, BlogPost } from "@/content/types";

const DIR = path.join(process.cwd(), "content", "blog");

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const decodeEntities = (s: string) =>
  s
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

function render(markdown: string) {
  const headings: BlogPost["headings"] = [];
  const marked = new Marked({
    gfm: true,
    renderer: {
      heading({ tokens, depth }: Tokens.Heading) {
        const text = this.parser.parseInline(tokens);
        const id = slugify(decodeEntities(text));
        if (depth === 2) headings.push({ id, text: decodeEntities(text.replace(/<[^>]+>/g, "")) });
        return `<h${depth} id="${id}">${text}</h${depth}>\n`;
      },
      link({ href, title, tokens }: Tokens.Link) {
        const text = this.parser.parseInline(tokens);
        const external = /^https?:\/\//.test(href);
        const t = title ? ` title="${title}"` : "";
        return external
          ? `<a href="${href}"${t} target="_blank" rel="noopener noreferrer">${text}</a>`
          : `<a href="${href}"${t}>${text}</a>`;
      },
      table(token: Tokens.Table) {
        // wrap tables so they can scroll horizontally on mobile
        const head = token.header
          .map((c) => `<th>${this.parser.parseInline(c.tokens)}</th>`)
          .join("");
        const rows = token.rows
          .map((r) => `<tr>${r.map((c) => `<td>${this.parser.parseInline(c.tokens)}</td>`).join("")}</tr>`)
          .join("");
        return `<div class="table-wrap"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
      },
    },
  });
  const html = marked.parse(markdown, { async: false }) as string;
  return { html, headings };
}

let cache: BlogPost[] | null = null;

export function getAllPosts(): BlogPost[] {
  if (cache && process.env.NODE_ENV === "production") return cache;
  if (!fs.existsSync(DIR)) return [];
  const posts = fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(DIR, file), "utf8");
      const { data, content } = matter(raw);
      const fm = data as BlogFrontmatter;
      const { html, headings } = render(content);
      const words = content.split(/\s+/).filter(Boolean).length;
      return {
        ...fm,
        // gray-matter parses unquoted dates into Date objects
        date: normalizeDate(fm.date),
        updated: fm.updated ? normalizeDate(fm.updated) : undefined,
        slug: file.replace(/\.md$/, ""),
        html,
        headings,
        readingMinutes: Math.max(1, Math.round(words / 230)),
        words,
      } satisfies BlogPost;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  cache = posts;
  return posts;
}

function normalizeDate(d: unknown): string {
  if (d instanceof Date) return d.toISOString().slice(0, 10);
  return String(d);
}

export const getPost = (slug: string) => getAllPosts().find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

/** Split rendered HTML before the Nth H2 so a CTA can be injected mid-article. */
export function splitAtHeading(html: string, n: number): [string, string] {
  let idx = -1;
  let from = 0;
  for (let i = 0; i < n; i++) {
    idx = html.indexOf("<h2", from);
    if (idx === -1) return [html, ""];
    from = idx + 3;
  }
  return [html.slice(0, idx), html.slice(idx)];
}
