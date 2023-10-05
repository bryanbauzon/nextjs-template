import "./globals.css";
import { Inter } from "next/font/google";
import { WEBSITE_NAME, WEBSITE_DESCRIPTION } from "./constants/constants";
import FooterCmp from "./components/footer-cmp";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: WEBSITE_NAME,
  description: WEBSITE_DESCRIPTION,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <FooterCmp name={WEBSITE_NAME}/>
      </body>
    </html>
  );
}
