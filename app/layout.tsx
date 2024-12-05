import { GeistSans } from "geist/font";
import "./globals.css";
// import { GeistSans } from 'geist/font'
// import { Alegreya } from 'next/font/google'


// const alegreya = Alegreya({ subsets: ['inter'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    // <html lang="en" className={`${GeistSans.className} ${alegreya.className}`} >
    <html lang="en" >
    <body>
       {children}
      </body>
    </html>
  );
}
