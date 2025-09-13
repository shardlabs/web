import { baseOptions as sharedBaseOptions } from "@/lib/layout.shared";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { BaseLayoutProps } from "fumadocs-ui/layouts/links";

export default function Layout({ children }: LayoutProps<"/">) {
  return <HomeLayout {...baseOptions()}>{children}</HomeLayout>;
}

export function baseOptions(): BaseLayoutProps {
  return {
    ...sharedBaseOptions(),
    links: [
      {
        text: "Documentation",
        url: "/docs",
      },
      {
        text: "Blog",
        url: "/blog",
        // secondary items will be displayed differently on navbar
        secondary: false,
      },
    ],
  };
}
