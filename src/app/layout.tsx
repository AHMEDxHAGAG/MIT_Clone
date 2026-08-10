import type { Metadata } from "next";
import "./globals.css";
import "@/components/sites/scenerepresentations-org-8a68da94/shared/site.css";

export const metadata: Metadata = {
  title: {
    default: "MIT CSAIL – Scene Representation Group",
    template: "%s – Scene Representation Group",
  },
  description: "MIT CSAIL Scene Representation Group",
  icons: {
    icon: "/sites/scenerepresentations-org-8a68da94/shared/favicon-dark-32.png",
    apple: "/sites/scenerepresentations-org-8a68da94/shared/apple-touch-icon-180.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="dark" lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var saved=localStorage.getItem("theme");document.documentElement.dataset.theme=saved||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark")}catch(_){}})()`,
          }}
          id="srg-theme-init"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
