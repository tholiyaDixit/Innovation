"use client";
import Image from "next/image";
import React from "react";
import goBack from "../../images/svg/leftArrow_goBack.svg";
import rightArrow from "../../images/svg/rightArrow.svg";
import reload from "../../images/svg/reload.svg";
import close from "../../images/svg/close.svg";

const PreNextReload = () => {
  // window.history.back()
  // window.history.forward()
  // window.history.go(number)
  return (
    <div
      style={{
        borderBottom: "1px solid #dbdbdbc7",
        boxShadow: "0 05px 5px #dbdbdbc7;",
        marginBottom:"7px"
      }}
    >
      <div className="flex justify-start items-center">
        <div
          className="p-3 hover:bg-slate-100 rounded-full"
          onClick={() => {
            window.history.back();
          }}
        >
          <Image
            src={goBack}
            alt="previous page"
            className="rounded-xl"
            width={25}
            height={25}
          />
        </div>
        <div className="p-3 hover:bg-slate-100 rounded-full">
          <Image
            src={rightArrow}
            alt="previous page"
            className="rounded-xl"
            width={25}
            height={25}
          />
        </div>
        <div
          className="p-3 hover:bg-slate-100 rounded-full"
          onClick={() => {
            window.location.reload();
          }}
        >
          <Image
            src={reload}
            alt="previous page"
            className="rounded-xl"
            width={25}
            height={25}
          />
        </div>
        {/* &nbsp; Previous page */}

        <div className="ml-auto mr-10">
          <button className="pt-1 pb-1 pr-6 pl-6 bg-slate-200 rounded-lg">
            Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreNextReload;
