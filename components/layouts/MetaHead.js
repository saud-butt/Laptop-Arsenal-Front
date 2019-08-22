import Head from "next/head";

const MetaHead = props => (
  <Head>
    <meta name="theme-color" content="#132940" />
    <title>{props.metaTitle}</title>
  </Head>
);

MetaHead.defaultProps = {
  metaTitle: "eFuse"
};

export default MetaHead;
