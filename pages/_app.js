import "../styles/globals.css";
import "../styles/Hangman.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import { NextIntlProvider } from "next-intl";
import React from "react";

const MyContext = React.createContext();

function onError(error) {
  if (process.env.NODE_ENV !== "production") {
    if (error.code === IntlErrorCode.MISSING_MESSAGE) {
      console.warn(error);
    } else {
      console.error(error);
    }
  }
}

function getMessageFallback({ namespace, key, error }) {
  const path = [namespace, key].filter((part) => part != null).join(".");

  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    return `${path} is not yet translated`;
  }
  return `Fix translation message at: ${path}`;
}

function MyApp({ Component, pageProps }) {
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  </>;
  return (
    <NextIntlProvider
      messages={pageProps.messages}
      onError={onError}
      getMessageFallback={getMessageFallback}
    >
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

export default MyApp;
