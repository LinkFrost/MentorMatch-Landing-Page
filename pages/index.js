import Head from "next/head";
import Header from "../components/Header.js";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Head>
        <title>MentorMatch</title>
      </Head>
      <main className="flex flex-col justify-center">
        <Header></Header>
      </main>
    </div>
  );
}
