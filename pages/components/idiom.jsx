import React, { useState, useContext } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import MyContext from "./context";

export default function Idiom() {
  const router = useRouter();
  const t = useTranslations("Home");
  const onChangeLanguage = (lang) => (e) => {
    e.preventDefault();
    if (lang === "es") {
      router.push("es");
    } else {
      router.back();
    }
  };
  const [myValue, setMyValue] = useState("something");
  const contextValue = useContext(MyContext);

  return (
    <MyContext.Provider value={{ myValue, setMyValue }}>
      <section>
        <div className="Hangman container">
          <div className="text-center"></div>
          <button onClick={onChangeLanguage("en")} className="btn btn-info">
            English
          </button>
          <button onClick={onChangeLanguage("es")} className="btn btn-info">
            Español
          </button>
        </div>
      </section>
    </MyContext.Provider>
  );
}
