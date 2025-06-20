// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Landing Page',
  description: 'Responsive Figma-to-Next.js project',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
