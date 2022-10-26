// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { ThemeContextProvider } from "../../lib/ThemeContext";
import Navbar from "../components/Navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeContextProvider>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
};

export default trpc.withTRPC(MyApp);
