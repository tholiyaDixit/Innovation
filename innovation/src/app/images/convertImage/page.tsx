"use client";
import PreNextReload from "@/components/preRextReload_header/PreNextReload";
import SelectImage from "@/components/selectImage/SelectImage";
import React, { useState } from "react";

const ConvertImage = () => {
  const [image, setImage] = useState<any>(null);
  const [format, setFormat] = useState<string>("image/jpeg");
  const [convertImage, setConvertImage] = useState<any>(null);

  const convertFile = () => {
    const reader = new FileReader();
    const file = image[0];
    console.log("file ---", file);
    reader.onload = function (e: any) {
      const img: any = new Image();
      img.onload = function () {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx: any = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL(format);
        let output: any = document.getElementById("output");
        if (output) {
          output.src = dataURL;
        }
        setConvertImage(dataURL);
      };
      img.src = e.target.result;
    };
    // console.log("file ---",dataURL);

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <PreNextReload />
      ConvertImage page
      <div className="flex justify-center items-center ">
        <div>
          <select
            name=""
            id=""
            value={format}
            onChange={(e) => {
              setFormat(e.target.value);
            }}
          >
            <option value="image/jpeg">JPEG</option>
            <option value="image/png">PNG</option>
            <option value="image/webp">WEBP</option>
          </select>
        </div>
        <SelectImage
          getImage={(files: any) => {
            setImage(files);
            // convertBase64();
          }}
        />
      </div>
      <div className="flex justify-center">
        <button
          className="py-2 px-3 bg-slate-400 rounded-md"
          onClick={convertFile}
        >
          Convert
        </button>
      </div>
      {!!image && <div>
        <a
          href={convertImage}
          download={true}
          className="border rounded-lg p-4 ml-4"
          style={{ color: "blue", backgroundColor: "#e2f0ff" }}
        >
          download
        </a>
        <img id="output" alt="Converted Image" className="mt-6"></img>
      </div>}
    </div>
  );
};

export default ConvertImage;
