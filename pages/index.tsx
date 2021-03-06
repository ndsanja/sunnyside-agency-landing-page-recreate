import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Galery from "../components/Galery";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sunnyside Agency</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Galery />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
