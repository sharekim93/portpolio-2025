import type { LinksFunction } from "react-router";
import { Links, Meta, Scripts, ScrollRestoration } from "react-router";
import styles from "./root.css?url";
import Layout from "./layout/Layout";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <title>Frontend Developer, Share Kim</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
