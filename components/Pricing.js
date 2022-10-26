/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Pricing() {
  return (
    <div className="bg-mmYellow drop-shadow-xl w-screen flex flex-col justify-center items-center px-8 py-8">
      <h1 className="font-bold text-4xl text-mmDarkBlue mb-6">Pricing</h1>

      <div className="grid grid-cols-2 gap-6">
        <div className="relative flex flex-col items-center rounded-xl bg-mmLightBlue shadow-md shadow-black p-3">
          <h2 className="text-3xl text-white mb-2">Free Tier</h2>
          <div className="flex flex-col justify-center">
            <p className="text-xl">
              <span className="font-semibold">1 mentor</span> for <span className="font-semibold">1 month</span>
            </p>
            <p className="text-xl">
              <span className="font-semibold">Chat based communication</span> with mentors
            </p>
            <p className="text-xl">
              Non-targetted <span className="font-semibold">advertisements</span>
            </p>
            <p className="text-xl">
              <span className="font-semibold">Review system</span> for mentors
            </p>
          </div>
        </div>

        <div className="relative flex flex-col items-center rounded-xl bg-mmBlue shadow-md shadow-black p-3">
          <h2 className="text-3xl text-white">Premium Tier</h2>
          <h2 className="text-2xl text-gray-200 mb-2">$10 per month</h2>
          <div className="flex flex-col justify-center">
            <p className="text-xl">
              Up to <span className="font-semibold">5 mentors at once</span> <span className="text-sm">(*for duration of subscription)</span>
            </p>
            <p className="text-xl">
              <span className="font-semibold">No advertisements</span>
            </p>
            <p className="text-xl">
              Access to <span className="font-semibold"> premium content</span> from mentors
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
