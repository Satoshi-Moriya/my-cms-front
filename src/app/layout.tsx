import React from "react";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My CMS",
  description: "自作CMSです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
