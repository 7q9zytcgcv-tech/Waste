import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import Cards from "@/components/Cards";
import SocialFloating from "@/components/SocialFloating";

export default function RootLayout({ children }) {
  return (
    <html lang="ka">
      <body className="flex flex-col min-h-screen">
        
        {/* Header */}
        <Header />

        {/* Content */}
        <main className="flex-1 w-full">
          {children}
        </main>

        <SectionDivider />
        <Cards />

        {/* Footer */}
        <Footer />

        <SocialFloating />
      </body>
    </html>
  );
}