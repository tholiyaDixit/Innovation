import ImagePageCard from "@/components/card/imagePageCard/ImagePageCard";
import React from "react";
import sizeReduce from "../../images/sizeReduce.png";

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
