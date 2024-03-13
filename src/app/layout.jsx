import { Inter } from "next/font/google";
import "./globals.css";
import StateContextProvider from "@/context/StateContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Plugin generator",
  description: "This is wordpress elementor plugin generator.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main-bg relative h-screen w-full overflow-hidden bg-gray-900 text-gray-50">
          <StateContextProvider>{children}</StateContextProvider>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
