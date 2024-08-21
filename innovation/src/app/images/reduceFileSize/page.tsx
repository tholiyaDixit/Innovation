"use client";
import React, { useEffect, useState } from "react";
import PreNextReload from "@/components/preRextReload_header/PreNextReload";
import SelectImage from "@/components/selectImage/SelectImage";
import Script from "next/script";
// import CompressImgDownloadCard from "@/components/card/compressImgDownloadCard/CompressImgDownloadCard";

const page = () => {
  const [image, setImage] = useState<any>(null);
  const [canvasImage, setCanvasImage] = useState<any>(null);
  const [rangeToggle, setRangeToggle] = useState<boolean>(true);
  const [height, setHeight] = useState<number>(180);
  const [width, setWidth] = useState<number>(320);
  const [quality, setQuality] = useState<number>(50);

  var convertImg = function (copy?: boolean) {
    var canvas: any = document.getElementById("canvasCompressImage");
    var img = canvas.toDataURL("image/png");
    console.log("img ---", img);
    setCanvasImage(img);
    // return img;
  };

  const copyText = async () => {
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); // range for mobile
    await navigator.clipboard
      .writeText(canvasImage)
      .then(() => {
        alert("successfully copied");
      })
      .catch(() => {
        alert("something went wrong");
      });
    
  }

  return (
    <>
      <div>
        <PreNextReload />
        <div>
          <div>
            <button
              className="pt-1 pb-1 pr-6 pl-6 bg-slate-200 rounded-lg"
              onClick={() => {
                setRangeToggle(!rangeToggle);
              }}
            >
              Select Range
            </button>
          </div>
          <div>
            {!!rangeToggle && (
              <>
                <ul>
                  <li>select width</li>
                  <li className="flex items-center">
                    {" "}
                    <input
                      type="range"
                      min="0"
                      max="500"
                      step="1"
                      value={width}
                      id="imageWidth"
                      className="w-full"
                      onChange={(e: any) => {
                        setWidth(e.target.value);
                      }}
                    />
                    <div className="border border-#f1f5f9 p-1">{width}</div>
                  </li>
                  <li>select height</li>
                  <li className="flex items-center">
                    {" "}
                    <input
                      type="range"
                      min="0"
                      max="500"
                      step="1"
                      id="imageHeight"
                      className="w-full"
                      onChange={(e: any) => {
                        setHeight(e.target.value);
                      }}
                    />
                    <div className="border border-#f1f5f9 p-1">{height}</div>
                  </li>
                  <li>select quality</li>
                  <li className="flex items-center">
                    {" "}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      id="imageQuality"
                      className="w-full"
                      onChange={(e: any) => {
                        setQuality(e.target.value);
                      }}
                    />
                    <div className="border border-#f1f5f9 p-1">{quality}</div>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
        <SelectImage
          getImage={(files: any) => {
            setImage(files);
          }}
        />
        <div>
          {!!image && (
            <>
              <div className="w-1/3 mb-10">
                <div className="img" id="compressImage"></div>
                <div className="bg-blue-400 text-white cursor-pointer text-center">
                  <a
                    href={canvasImage}
                    download="newname"
                    onClick={() => {
                      convertImg();
                    }}
                  >
                    Download
                  </a>
                </div>
                <div className="bg-blue-400 text-white cursor-pointer text-center mt-5">
                  <a
                    onClick={async () => {
                      convertImg();
                      copyText()
                    }}
                  >
                    copy
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
        <Script
          src="/compressImage.js"
          onLoad={() => {
            console.log("file loading com");
          }}
        />
      </div>

      {/* <div>
        <p>
          compress Image info <br /> first you can select with, height and
          quality range then you select your image and wait for result
        </p>
      </div> */}
    </>
  );
};

export default page;
// navigator.clipboard.writeText(copyText.value);