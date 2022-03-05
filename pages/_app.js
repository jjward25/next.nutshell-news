import "../styles/globals.scss";
import Layout from "../front-components/layout";
import Amplify from "aws-amplify";
import config from "../src/aws-exports";

Amplify.configure({
  ...config,
  ssr: true,
});

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
