import "@/app/global.css";
import { BaseLayoutProps } from "fumadocs-ui/layouts/links";
import { RootProvider } from "fumadocs-ui/provider";
import { BookIcon } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
