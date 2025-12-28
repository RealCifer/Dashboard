import "./globals.css";

export const metadata = {
  title: "Groww Finance Dashboard",
  description: "Finance dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
