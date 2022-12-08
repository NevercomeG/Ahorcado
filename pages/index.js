import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hangman from "./components/hangmand";
import Idiom from "./components/idiom";
import { useTranslations } from "next-intl";
import { Main } from "next/document";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div className="App">
      <Idiom />
      <Hangman />
    </div>
  );
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
}
