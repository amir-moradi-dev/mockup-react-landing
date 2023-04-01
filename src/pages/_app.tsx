import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Layout from "@/layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min");
  }, []);

  return (
    <Layout>
      <Head>
        <link rel={"stylesheet"} href={"/assets/fonts/vazir/VazirFont.css"} />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
