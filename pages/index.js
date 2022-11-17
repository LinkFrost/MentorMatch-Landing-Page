import Head from "next/head";
import BasicInfo from "../components/BasicInfo.js";
import Header from "../components/Header.js";
import Features from "../components/Features.js";
import Pricing from "../components/Pricing.js";
import Feedback from "../components/Feedback.js";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>MentorMatch</title>
      </Head>
      <Header></Header>
      <main className="flex flex-col justify-center">
        <BasicInfo></BasicInfo>
        <Features></Features>
        <Pricing></Pricing>
        <Feedback></Feedback>
      </main>
    </div>
  );
}
