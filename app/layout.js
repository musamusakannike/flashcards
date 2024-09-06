import {Poppins} from "next/font/google";
import "./styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300","400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Flashcards - Arabic and English",
  description: "Learn new words in Arabic and English with this simple flashcard app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins`}
      >
        {children}
      </body>
    </html>
  );
}
