import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StickyCta from "@/components/StickyCta";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <StickyCta />
    </>
  );
}
