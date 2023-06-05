
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactUs from "../components/ContactUs";

import Link from "next/link";
import React from "react";
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
    <title>Client | Front-End Developer</title>
    <meta name="description" content="Generated by create next app" />
    </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <ContactUs />
    </>
  );
}
