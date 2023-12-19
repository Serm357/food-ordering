import { AppProvider } from "@/components/AppContext";
import { ClerkProvider } from "@clerk/nextjs";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Food Misosi",
  description: "Best food ordering site in Tanzania",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html>
        <body className={roboto.className}>
          <main className="max-w-4xl mx-auto p-4">
            {/* <AppProvider> */}
            {children}
            {/* </AppProvider> */}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
