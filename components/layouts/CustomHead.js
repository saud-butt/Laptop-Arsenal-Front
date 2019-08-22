import React from "react";
import { Head } from "next/document";
const getPagePathname = pathname => {
  if (pathname === "/") {
    return "/index.js";
  }
  return `${pathname}.js`;
};
export default class CustomHead extends Head {
  render() {
    const {
      head,
      styles,
      assetPrefix,
      __NEXT_DATA__
    } = this.context._documentProps;
    const { page, buildId } = __NEXT_DATA__;
    const pagePathname = getPagePathname(page);
    let children = this.props.children;
    // show a warning if Head contains <title> (only in development)
    if (process.env.NODE_ENV !== "production") {
      children = React.Children.map(children, child => {
        if (child && child.type === "title") {
          console.warn(
            "Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title"
          );
        }
        return child;
      });
    }
    return (
      <head {...this.props}>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" type="image/png" href="/static/images/favicon.png" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />

        <link href="/static/styles/style.css" rel="stylesheet" />
        {/* <link href="/static/styles/test.css" rel="stylesheet" /> */}
        {head}
        {page !== "/_error" && (
          <link
            rel="preload"
            href={`${assetPrefix}/_next/static/${buildId}/pages${pagePathname}`}
            as="script"
            nonce={this.props.nonce}
          />
        )}
        {children}
        <link
          rel="preload"
          href={`${assetPrefix}/_next/static/${buildId}/pages/_app.js`}
          as="script"
          nonce={this.props.nonce}
        />
        <link
          rel="preload"
          href={`${assetPrefix}/_next/static/${buildId}/pages/_error.js`}
          as="script"
          nonce={this.props.nonce}
        />
        {this.getPreloadDynamicChunks()}
        {this.getPreloadMainLinks()}
        {this.getCssLinks()}
        {styles || null}
      </head>
    );
  }
}
