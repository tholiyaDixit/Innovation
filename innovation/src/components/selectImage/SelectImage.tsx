"use client";
import React, { useEffect, useState } from "react";
import "./SelectImage.css";

interface SelectImageProps {
  getImage:any
}

const SelectImage = (props: SelectImageProps) => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  useEffect(() => {
    !!selectedImage && props.getImage(selectedImage)
  },[selectedImage])

  return (
    <div className="selectImage">
      <label className="drop-container" id="dropcontainer">
        <span className="drop-title">Drop files here</span>
        or
        <input
          type="file"
          id="img-input"
          accept="image/*"
          required
          onChange={(e: any) => {
            // console.log("e ---",e.target.files);
            
            setSelectedImage(e.target.files)
            props.getImage(e.target.files)
          }}
        />
      </label>
    </div>
  );
};

export default SelectImage;
