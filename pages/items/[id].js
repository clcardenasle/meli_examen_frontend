import { useRouter } from "next/dist/client/router";
import React from "react";
import Layout from "../../src/components/Layout";

const id = () => {
  const router = useRouter();

  return (
    <div>
      <Layout>
        <p>{router.query.id}</p>
      </Layout>
    </div>
  );
};

export default id;
