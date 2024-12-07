import { GeistSans } from "geist/font";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="relative w-full overflow-x-hidden">
        <div className="relative w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
