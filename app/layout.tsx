import "./globals.css";
import { Roboto } from "next/font/google"

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: "JourneyIQ",
  // icons: {
  //   icon: "/favicon.ico",
  // },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="bg-gray-300">
        {children}
      </body>
    </html>
  );
}
