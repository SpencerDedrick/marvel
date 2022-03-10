import Layout from "../components/layout/layout";
import Head from "next/head";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <h1>Contact</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </>
  );
};

export default Contact;
