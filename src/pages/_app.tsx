import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Layout from "@/layout";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
