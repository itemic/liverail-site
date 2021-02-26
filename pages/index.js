import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Privacy() {
  return (
    <div className="">
      <Head>
        <title>Live Rail for HSR</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="mx-auto my-auto bg-yellow-50">
        <div className="mx-auto py-12 px-4 sm:px-6 lg:py-16 min-h-screen lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div className="space-y-5">
            <h2 className=" tracking-tight text-gray-900">
              <span className="font-semibold block text-6xl text-yellow-500">
                Live Rail for HSR
              </span>
              <span className="font-extralight block text-4xl text-yellow-900 italic">
                Timetable and Departure Board
              </span>
            </h2>
            <span className="inline-block">
              <a
                href="https://apps.apple.com/app/live-rail-for-hsr/id1550589269"
                className="block"
              >
                <img
                  src="/appstore.svg"
                  className="block"
                  alt="download on appstore"
                />
              </a>
            </span>
          </div>

          {/* Image can go here */}
          <img
            src="/dualscreen.png"
            alt="screenshot of liverail hsr on iphone"
            width="500px"
          />
        </div>
      </div>

      {/* 2 */}
      <div className="my-auto bg-yellow-500">
        <div className="py-8 lg:py-0 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div className=" px-4 sm:px-6">
            <div className=" tracking-tight text-gray-900 space-y-6">
              <div className="flex flex-wrap text-3xl">
                <div className="font-bold p-2 m-2 bg-yellow-400   rounded-lg">
                  Departure board
                </div>
                <div className="font-normal p-2 m-2 bg-yellow-400   rounded-lg">
                  Station dots
                </div>
                <div className="font-light p-2 m-2 bg-yellow-400   rounded-lg">
                  Ticket pricing
                </div>
                <div className="font-medium p-2 m-2 bg-yellow-400   rounded-lg">
                  Availability
                </div>
                <div className="font-normal p-2 m-2 bg-yellow-400   rounded-lg">
                  More features to come
                </div>
                <div className="font-bold p-2 m-2 bg-yellow-400   rounded-lg">
                  Search for trains
                </div>
                <div className="font-light p-2 m-2 bg-yellow-400   rounded-lg">
                  Haptics
                </div>
                <div className="font-medium p-2 m-2 bg-yellow-400   rounded-lg">
                  Nearest&nbsp;station
                </div>
                <div className="font-normal p-2 m-2 bg-yellow-400   rounded-lg">
                  User friendly
                </div>
                <div className="font-semibold p-2 m-2 bg-yellow-400   rounded-lg">
                  English
                </div>
                <div className="font-medium p-2 m-2 bg-yellow-400   rounded-lg">
                  Chinese
                </div>
                <div className="font-normal p-2 m-2 bg-yellow-400   rounded-lg">
                  SwiftUI
                </div>
                <div className="font-light p-2 m-2 bg-yellow-400   rounded-lg">
                  Easy to use
                </div>
                <div className="font-medium p-2 m-2 bg-yellow-400   rounded-lg">
                  Frequent updates
                </div>
                <div className="font-bold p-2 m-2 bg-yellow-400   rounded-lg">
                  Free
                </div>
                <div className="font-medium p-2 m-2 bg-yellow-400   rounded-lg">
                  Ad-free
                </div>
                <div className="font-light p-2 m-2 bg-yellow-400   rounded-lg">
                  No tracking
                </div>
              </div>
              <div>
                <a href="/privacy" className="inline-block">
                  <h4 className="font-light text-base block">Privacy Policy</h4>
                </a>
              </div>
              <div>
                <a href="/support" className="inline-block">
                  <h4 className="font-light text-base block">Support</h4>
                </a>
              </div>
            </div>
          </div>

          {/* Image can go here */}
          <img
            src="/manyscreens.png"
            alt="many more screenshots"
            className="hidden lg:block h-screen"
          />

          <img
            className="invisible sm:visible"
            src="/multihorizontal.png"
            alt="many more screenshots"
            className="block lg:hidden w-screen"
          />
        </div>
      </div>
    </div>
  );
}
