import Head from "next/head";
import BasicInfo from "../components/BasicInfo.js";
import Header from "../components/Header.js";
import Features from "../components/Features.js";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Head>
        <title>MentorMatch</title>
      </Head>
      <Header></Header>
      <main className="flex flex-col justify-center">
        <BasicInfo></BasicInfo>
        <Features></Features>
      </main>
    </div>
  );
}
