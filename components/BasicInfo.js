/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import People from "../public/People.js";

export default function BasicInfo() {
  return (
    <div className="bg-mmYellow drop-shadow-xl w-screen flex flex-col justify-center items-center py-8">
      <h1 className="font-bold text-4xl text-mmDarkBlue mb-3">Curio's Vision</h1>

      <div className="mb-4">
        <h2 className="font-bold text-2xl text-mmDarkBlue mb-1">The Problem</h2>

        <p className="text-lg text-mmDarkBlue max-w-4xl">
          Learning about a new field of interest, whether it be for educational or professional purposes, can be a daunting task. There is a lot of information and research to be done, and Sometimes, the <span className="font-semibold">research can be very complicated!</span>
        </p>
      </div>
      <div className="mb-4">
        <h2 className="font-bold text-2xl text-mmDarkBlue mb-1">The Solution</h2>

        <p className="text-lg text-mmDarkBlue max-w-4xl">
          MentorMatch is a platform where users can reach out and find a mentor to <span className="font-semibold">gain knowledge and insight about an area of interest</span>. We want to make that first step of getting into a new field, industry, or hobby
          <span className="font-semibold">more accessible</span> to everyone by linking users to mentors with experience.
        </p>
      </div>
      <div className="mb-4">
        <h2 className="font-bold text-2xl text-mmDarkBlue mb-1">The Value</h2>

        <p className="text-lg text-mmDarkBlue max-w-4xl">MentorMatch ensures that a user is connected to the best mentor for them. The people at Curio have experience of being both mentors and mentees, and we believe we can bring this service to all sorts of fields.</p>
      </div>
    </div>
  );
}
