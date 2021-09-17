import React from 'react';
import Layout from '../src/components/Layout';
import Head from "next/head";

const index = () => {
  return (
    <div>
      <Head>
        <title>Mercado Libre</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Test Front-end MELI"
        />
      </Head>
      <Layout />
    </div>
  );
};

export default index;