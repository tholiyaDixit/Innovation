"use client";
import PreNextReload from "@/components/preRextReload_header/PreNextReload";
import SelectImage from "@/components/selectImage/SelectImage";
import React, { useState } from "react";
import { convertBase64Image } from "../../../utils/base64";
import Image from "next/image";
import copy from "@/images/svg/copy.svg";
import { customPopup } from "@/utils/customPopup";

const page = () => {
  const [image, setImage] = useState<any>(null);
  const [baseImage, setBaseImage] = useState("");
  console.log("image ---", image);

  const convertBase64 = async () => {
    console.log("callconvertBase64 ---");

    if (!!image && image.length > 0) {
      const file = image[0];
      const base64: any = await convertBase64Image(file);
      console.log("base64 ---", base64);

      setBaseImage(base64);
      // setLoading(false);
    }
  };

  return (
    <div>
      <PreNextReload />
      <p>base 64 decode page </p>
      <div>
        <SelectImage
          getImage={(files: any) => {
            setImage(files);
            convertBase64();
          }}
        />
      </div>

      {/*  show encoded image url */}
      {!!baseImage && (
        <div
          className="h-96 border overflow-scroll"
          style={{ minWidth: "500px", maxWidth: "200px" }}
        >
          <div className="">
            <button
              onClick={() => {
                navigator.clipboard.writeText(baseImage);
                customPopup("URL copy successfully");
              }}
            >
              <Image src={copy} alt="copy" width={50} height={50} />
            </button>
          </div>
          <div style={{ wordWrap: "break-word", wordBreak: "break-all" }}>
            {baseImage}
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
