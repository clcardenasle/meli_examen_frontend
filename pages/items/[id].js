import { useRouter } from "next/dist/client/router";
import React from "react";
import DetailContainer from "../../src/components/DetailContainer";
import Layout from "../../src/components/Layout";
import Head from "next/head";

const Id = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Mercado Libre - Detalles</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Test Front-end MELI - Detalles Producto"
        />
      </Head>
      <Layout>
        <DetailContainer id={router.query.id} />
      </Layout>
    </div>
  );
};

export default Id;
