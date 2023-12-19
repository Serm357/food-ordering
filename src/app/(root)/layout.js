import Header from "@/components/layout/Header";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <main className="max-w-4xl mx-auto p-4 scroll-smooth">
      <Toaster />
      <Header />
      {children}
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2023 All rights reserved
      </footer>
    </main>
  );
}
