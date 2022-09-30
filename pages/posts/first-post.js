import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';
import Alert from '../../components/alert';

export default function FirstPost() {
  return (
    <>
      {/* <Head>
        <title>First Posttt</title>
        {/* <script src="https://connect.facebook.net/en_US/sdk.js" /> */}
      {/* </Head> */} 
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
      {/* <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2> */}
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <Alert type="error">HELLOOOOOOOOOOO</Alert>
        <Link href="/profile/profile">
            <a>Go to profile</a>
          </Link>
          <Link href="/">
            <a>Back to home</a>
          </Link>
      </Layout>
    </>
  );
}