import {
    Link,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration
} from "@remix-run/react";
import "./styles/tailwind.css";
import styles from '~/styles/default-styles.css'
import React from "react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Breadcrumb from "~/components/Breadcrumb";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styles },
];

export function Layout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>

      <Header/>

      <Breadcrumb/>

      <main>

      {children}

      </main>

      <Footer/>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
