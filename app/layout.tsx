
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Stability Pathway for Youth",
  description: "A guide to resources and support for youth.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
