import { useRouter } from "next/dist/client/router";
import React from "react";
import Layout from "../src/components/Layout";
import SearchContainer from "../src/components/SearchContainer";

const items = () => {

  const router = useRouter();

  return (
    <div>
      <Layout>
        <SearchContainer query={router.query.search}/>
      </Layout>
    </div>
  );
};

export default items;
