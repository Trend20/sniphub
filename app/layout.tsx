import type { Metadata } from "next";
import "/styles/globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Sniphub",
  description: "Code snippet store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col w-full">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
