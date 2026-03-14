import './globals.css';

export const metadata = {
  title: 'LedgerAttend — Intelligent Campus Attendance System',
  description: 'Enterprise-grade geofenced attendance & campus operations platform. Eliminate proxy attendance with precision GPS verification, real-time dashboards, and seamless multi-tenancy.',
  keywords: 'attendance system, geofencing, campus management, proxy prevention, flutter app, attendance tracking',
  openGraph: {
    title: 'LedgerAttend — Intelligent Campus Attendance',
    description: 'Enterprise-grade geofenced attendance platform for educational institutions.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
