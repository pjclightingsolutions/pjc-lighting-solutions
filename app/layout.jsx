export const metadata = {
  title: "PJC Lighting Solutions",
  description: "Permanent track lighting serving all of Arizona."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body style={{ margin: 0, fontFamily: "system-ui, Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
