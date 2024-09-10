"use client";
import React, { useState } from "react";
import menuIcon from "../../images/svg/menu.svg";
import Image from "next/image";
import imgIcon from "@/images/svg/image.svg";
import icons from "@/images/icons.webp";
import jsUseFullFunctions from "@/images/svg/jsUseFullFunctions.svg";

const Following = [{ name: "Payal", img: "https://picsum.photos/200" }];
const Library = [
  {
    name: "jsFunctions",
    navigatePath: "/jsFunctions",
    svg: jsUseFullFunctions,
    icon: undefined,
  },
  {
    name: "images",
    navigatePath: "/images",
    svg: imgIcon,
    icon: undefined,
  },
  {
    name: "Icons",
    navigatePath: "/icons",
    svg: icons,
    icon: undefined,
  },
  {
    name: "Favorites",
    navigatePath: "/",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  { name: "Watch later", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  {
    name: "History",
    navigatePath: "/",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  },
  {
    name: "Scheduled",
    navigatePath: "/",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
];
const Main = [
  {
    name: "Home",
    navigatePath: "/",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    name: "Download",
    navigatePath: "/download",
    icon: "M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z",
  },
  {
    name: "Most recommended",
    navigatePath: "/",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    name: "Most commented",
    navigatePath: "/",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
];

const Sidebar = ({ children }: any) => {
  const [openSideBar, setOpenSideBar] = useState(true);
  console.log("time ---")

  return (
    <div>
      <div className="flex min-h-screen">
        {openSideBar && (
          <div className="w-64 bg-gray-50 border-r border-gray-200">
            <div className="py-4 px-6">
              <a href="/">
                <svg className="w-full h-10" viewBox="0 0 69 40">
                  <path
                    fill="#34D186"
                    d="M55.26 0v30.07h-7.13V1.5L55.26 0ZM34.94 32.92a3.55 3.55 0 0 1 3.57 3.54c0 1.96-1.6 3.54-3.57 3.54a3.55 3.55 0 0 1-3.56-3.54c0-1.95 1.6-3.54 3.56-3.54Zm0-24.38c6.08 0 11.02 4.89 11.02 10.92s-4.94 10.92-11.02 10.92a10.96 10.96 0 0 1-11-10.92c0-6.03 4.93-10.92 11-10.92Zm0 14.46a3.55 3.55 0 0 0 3.57-3.54c0-1.96-1.6-3.54-3.57-3.54a3.55 3.55 0 0 0-3.56 3.54c0 1.96 1.6 3.54 3.56 3.54ZM12.5 23c1.23 0 2.23-1 2.23-2.21 0-1.22-1-2.22-2.23-2.22H7.15V23h5.35ZM7.15 7.08v4.42h3.96c1.23 0 2.23-1 2.23-2.21 0-1.22-1-2.21-2.23-2.21H7.15Zm11.92 7.1a9.19 9.19 0 0 1 2.78 6.6c0 5.14-4.19 9.3-9.36 9.3H0V0h11.1a9.33 9.33 0 0 1 9.37 9.29c0 1.79-.51 3.47-1.4 4.88Zm49.67 1.84h-3.56v5.55c0 1.68.55 2.92 1.97 2.92a6 6 0 0 0 1.6-.2v5.2s-1.48.89-3.48.89h-.09l-.26-.01h-.06l-.13-.01c-3.99-.2-6.7-2.7-6.7-7V5.03l7.14-1.5v5.4h3.57v7.08Z"
                  />
                </svg>
              </a>
            </div>

            <div className="mb-10">
              <h3 className="mx-6 mb-2 text-xs text-gray-400 uppercase tracking-widest">
                Main
              </h3>
              {Main.map((main: any, index: number) => (
                <>
                  <a
                    key={index}
                    href={main.navigatePath}
                    className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                  >
                    <svg
                      className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      // // stroke-width="2"
                    >
                      <path
                        // stroke-linecap="round"
                        // stroke-linejoin="round"
                        // d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        d={main.icon}
                      />
                    </svg>
                    {main.name}
                  </a>
                </>
              ))}
            </div>

            <div className="mb-10">
              <h3 className="mx-6 mb-2 text-xs text-gray-400 uppercase tracking-widest">
                Library
              </h3>

              {Library.map((libraryItem: any, index: number) => (
                <>
                  <a
                    key={index}
                    href={libraryItem.navigatePath}
                    className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                  >
                    {!!libraryItem.icon ? (
                      <svg
                        className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          // stroke-linecap="round"
                          // stroke-linejoin="round"
                          // stroke-width="2"
                          // d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          d={libraryItem.icon}
                        ></path>
                      </svg>
                    ) : (
                      <Image
                        src={libraryItem.svg}
                        alt="O"
                        width={20}
                        height={20}
                        style={{ marginRight: "0.5rem" }}
                      />
                    )}
                    {libraryItem.name}
                  </a>
                </>
              ))}
            </div>
            <div className="mb-10">
              <h3 className="mx-6 mb-2 text-xs text-gray-400 uppercase tracking-widest">
                Following
              </h3>
              {Following.map((followingItem: any, index: number) => (
                <>
                  <a
                    key={index}
                    href="/"
                    className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                  >
                    <img
                      src={followingItem.img}
                      alt=""
                      className="w-7 h-7 rounded-full mr-2"
                    />
                    {followingItem.name}
                  </a>
                </>
              ))}
            </div>
          </div>
        )}

        <div className="flex-1">
          <div className="flex justify-between py-3 px-6 bg-gray-50 border-b space-x-6">
            <form action="" className="w-full max-w-md">
              <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                <button
                  onClick={(e: any) => {
                    e.preventDefault();
                    setOpenSideBar(!openSideBar);
                  }}
                >
                  <Image
                    src={menuIcon}
                    width={30}
                    height={30}
                    alt="menu icon"
                  />
                </button>
                <div className="flex items-center ml-6">
                  <svg
                    className="w-5 h-5 absolute ml-3 pointer-events-none"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    name="search"
                    placeholder="Search talk"
                    aria-label="Search talk"
                    className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
                  />
                </div>
              </div>
            </form>

            <div className="relative flex-shrink-0">
              <div className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                <img
                  className="inline w-10 h-10 rounded-full"
                  src="https://picsum.photos/150"
                  alt=""
                />
              </div>
            </div>
          </div>

          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
