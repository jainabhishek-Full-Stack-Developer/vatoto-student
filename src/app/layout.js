import "./globals.css";


export const metadata = {
  title: "Vatoto.live - Empowering Education",
  description: "Vatoto.live is an innovative online education platform providing high-quality courses, live classes, and expert guidance to help students succeed.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
