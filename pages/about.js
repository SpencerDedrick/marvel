import Layout from "../components/layout/layout";
import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About Marvel Baby</title>
      </Head>
      <h1>ABOUT</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </>
  );
}
