import ImagePageCard from "@/components/card/imagePageCard/ImagePageCard";
import React from "react";
import sizeReduce from "../../images/sizeReduce.png";
import base64Decode from "../../images/base64-decode.png";
import convertImage from "../../images/convertImage.png";

interface Props {}

const page = (props: Props) => {
  return (
    <div>
      <div className="flex justify-around flex-wrap">
          <ImagePageCard
            price={"Free"}
            description={`click 'Upload' button and select any image then wait for result`}
            title={"Reduce File Size"}
            img={sizeReduce}
            navigate={"/images/reduceFileSize"}
          />
        <ImagePageCard
          price={"Free"}
          description={`click 'Upload' button and select any image then wait for base64 decode result`}
          title={"Base 64"}
          img={base64Decode}
          navigate={"/images/base%64%decode"}
        />
        <ImagePageCard
          price={"Free"}
          description={`click 'Upload' button and select any image then wait for result`}
          title={"Convert Image"}
          img={convertImage}
          navigate={"/images/convertImage"}
        />
        <ImagePageCard
          price={"Free"}
          description={`click 'Upload' button and select any image then wait for result`}
          title={"Reduce File Size"}
          navigate={"/"}
        />
        <ImagePageCard
          price={"Free"}
          description={`click 'Upload' button and select any image then wait for result`}
          title={"Reduce File Size"}
          navigate={"/"}
        />
        <ImagePageCard
          price={"Free"}
          description={`click 'Upload' button and select any image then wait for result`}
          title={"Reduce File Size"}
          navigate={"/"}
        />
      </div>
    </div>
  );
};

export default page;
