/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Pricing() {
  return (
    <div className="bg-mmYellow drop-shadow-xl w-screen flex flex-col justify-center items-center px-8 py-8">
      <h1 className="font-bold text-4xl text-mmDarkBlue mb-6">Pricing</h1>

      <div className="grid grid-cols-3 gap-6 max-w-screen-lg">
        <div className="relative flex flex-col items-center rounded-xl bg-white shadow-md shadow-black p-3">
          <h2 className="text-3xl text-black mb-2">Free Tier</h2>

          <h2 className="text-2xl text-black font-bold mb-2">$0</h2>
          <div className="flex flex-col justify-center">
            <p className="text-xl mb-2">
              <span className="font-semibold">One session</span> per mentor
            </p>
            <p className="text-xl mb-2">
              <span className="font-semibold">Video calls</span> with mentors
            </p>
            <p className="text-xl mb-2">
              Non-targetted <span className="font-semibold">advertisements</span>
            </p>
          </div>
        </div>

        <div className="relative flex flex-col items-center rounded-xl bg-white shadow-md shadow-black p-3">
          <h2 className="text-3xl text-mmBlue">Premium</h2>
          <h2 className="text-2xl text-black font-bold">
            $30 <span className="text-gray-700 font-normal">monthly</span>
          </h2>
          or
          <h2 className="text-2xl text-black font-bold mb-2">
            $270{" "}
            <span className="text-gray-700 font-normal">
              annualy <span className="text-lg text-gray-500">*save $90!</span>
            </span>
          </h2>
          <div className="flex flex-col justify-center">
            <p className="text-xl mb-2">
              <span className="font-semibold">Unlimited</span> sessions with mentors<span className="text-sm"></span>
            </p>
            <p className="text-xl mb-2">
              <span className="font-semibold">Video calls</span> and <span className="font-semibold">text communication</span> with mentors
            </p>
            <p className="text-xl mb-2">
              <span className="font-semibold">No advertisements</span>
            </p>
            <p className="text-xl mb-2">
              Access to <span className="font-semibold">premium content</span> from mentors
            </p>
          </div>
        </div>

        <div className="relative flex flex-col items-center rounded-xl bg-white shadow-md shadow-black p-3">
          <h2 className="text-3xl text-red-500">Business</h2>
          <h2 className="text-2xl text-black mb-3">Contact for pricing information</h2>

          <div className="flex flex-col justify-center">
            <p className="text-xl mb-2">
              Run MentorMatch's software and recommendation system at your organization for <span className="font-semibold">internal use with students/employees</span>
            </p>
            <p className="text-xl mb-2">Mentor's are chosen from the business for new students/hires</p>
            <p className="text-xl mb-2">
              <span className="font-semibold">Video calls</span> and <span className="font-semibold">text communication</span> with mentors
            </p>
            <p className="text-xl mb-2">
              <span className="font-semibold">No advertisements</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
