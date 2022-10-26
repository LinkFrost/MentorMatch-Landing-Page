/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import People from "../public/People.js";

export default function BasicInfo() {
  return (
    <div className="bg-mmYellow drop-shadow-xl w-screen flex flex-col justify-center items-center px-8 py-8">
      <h1 className="font-bold text-4xl text-mmDarkBlue mb-3">Curio's Vision</h1>

      <div className="mb-4">
        <h2 className="font-bold text-2xl text-mmDarkBlue mb-1">The Problem</h2>

        <p className="text-lg text-mmDarkBlue max-w-4xl">
          There are a lot of people out there who have a lack of accessible education, advice, and awareness for jobs and educational fields. Sometimes, the <span className="font-semibold">research can be very complicated!</span>
        </p>
      </div>
      <div className="mb-4">
        <h2 className="font-bold text-2xl text-mmDarkBlue mb-1">The Solution</h2>

        <p className="text-lg text-mmDarkBlue max-w-4xl">
          MentorMatch is a platform where users can reach out and find a mentor to <span className="font-semibold">gain knowledge and insight about an area of interest</span>. We want to make that first step of getting into a new field, industry, or hobby{" "}
          <span className="font-semibold">more accessible</span> to everyone by linking users to mentors with experience.
        </p>
      </div>
      <div className="mb-4">
        <h2 className="font-bold text-2xl text-mmDarkBlue mb-1">The Value</h2>

        <p className="text-lg text-mmDarkBlue max-w-4xl">
          There are two things that make MentorMatch unique. The first is our actual matching process, ensuring that a user is connected to the best mentor that is relevant to their interests. The second is the people at Curio. MentorMatch is inspired by various peer advising and mentor services
          offered at universities, and with our knowledge of being both mentors and mentees, we believe we can bring this service to all sorts of fields.
        </p>
      </div>
    </div>
  );
}
