"use client";
import HtmlIconCode from "@/components/htmlIconCode/HtmlIconCode";
import PreNextReload from "@/components/preRextReload_header/PreNextReload";
import SelectBox from "@/components/selectBox/SelectBox";
import React from "react";

const selectedItem = ["HTML", "CSS", "SVG"];

const page = () => {
  const [selectedValue, setSelectedValue] = React.useState("brazil");
  console.log("selectedValue ---", selectedValue);

  return (
    <div>
      <PreNextReload />
      <div className="ml-5 mt-5 flex justify-around">
        <SelectBox
          selected={(value: any) => {
            setSelectedValue(value);
          }}
          value={selectedItem}
        />
        <input type="text" name="" id="" value={"search"} />
      </div>
      <HtmlIconCode />
    </div>
  );
};

export default page;
