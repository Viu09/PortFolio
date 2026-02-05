import "./globals.css";

export const metadata = {
  title: "Prenom Nom - Portfolio",
  description: "Portfolio bilingue FR/EN d'un jeune developpeur logiciel."
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
