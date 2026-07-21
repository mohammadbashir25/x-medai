import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";
import CursorGlow from "../components/effects/CursorGlow";
import WhatsappButton from "../components/ui/WhatsappButton";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main className="pt-20">{children}</main>
      <WhatsappButton />
      <Footer />
    </>
  );
}
