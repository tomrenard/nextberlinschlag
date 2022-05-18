import Head from "next/head";
import Header from "../components/Header";
import { client } from '../Shopify-client';

export default function Home(props) {
  console.log(props);
  return (
    <div>
      <Head>
        <title>Berlin Schlag</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const products = await client.product.fetchAll(); // Fetch product
  const infos = await client.shop.fetchInfo(); // Fetch shop Info if you think about SEO and title and ... to your page
  const policies = await client.shop.fetchPolicies(); // fetch shop policy if you have any 
  return {
   props: {
   infos: JSON.parse(JSON.stringify(infos)),
   policies: JSON.parse(JSON.stringify(policies)),
   products: JSON.parse(JSON.stringify(products)),
  },
 };
};
