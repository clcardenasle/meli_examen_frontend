import { useRouter } from "next/dist/client/router";
import React from "react";
import DetailContainer from "../../src/components/DetailContainer";
import Layout from "../../src/components/Layout";

const id = () => {
  const router = useRouter();

  return (
    <div>
      <Layout>
        <DetailContainer id={router.query.id}/>
      </Layout>
    </div>
  );
};

export default id;
