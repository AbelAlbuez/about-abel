import Head from "next/head";
import { Navbar } from "../molecules";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abel Albuez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
    </div>
  );
}
