import { useRouter } from "next/dist/client/router";
import React from "react";
import Layout from "../src/components/Layout";
import SearchContainer from "../src/components/SearchContainer";
import Head from "next/head";

const Items = () => {

  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Mercado Libre - {router.query.search}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Test Front-end MELI - Resultados de búsqueda" />
      </Head>
      <Layout>
        <SearchContainer query={router.query.search} />
      </Layout>
    </div>
  );
};

export default Items;
