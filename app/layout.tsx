import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SF6Pedia - Street Fighter 6 Character Encyclopedia",
  description:
    "Complete character guide for Street Fighter 6. Frame data, matchup charts, and strategy tips for every character.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
        <header className="border-b border-border">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <a
              href="/"
              className="text-2xl font-black tracking-tight text-transparent bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text"
            >
              SF6PEDIA
            </a>
            <span className="text-sm text-text-muted">
              Street Fighter 6 Encyclopedia
            </span>
          </nav>
        </header>
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>
        <footer className="border-t border-border py-6 text-center text-sm text-text-muted">
          SF6Pedia &mdash; Community-driven SF6 knowledge base
        </footer>
      </body>
    </html>
  );
}
