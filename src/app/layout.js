// src/app/layout.js

import "../styles/globals.css"; // Adjust the path according to your structure

export const metadata = {
  title: 'My Spreadsheet App',
  description: 'A spreadsheet app built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
