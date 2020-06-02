import React from "react";
import "./ImageList.css";

const ImageList: React.FC<{ images: any}> = (props) => {
  console.log("props", props.images);

  const result = props.images.map((image: any, index: number) => {
    const url = `https://vault29-backend.innoventestech.in/${image.photo_url}`;
    return (
      <img key={index} src={url} alt="imageError" width="100%" height="100%" />
     
     
    );
  });

return <div className="image-list">{result}</div>;
};

export default ImageList;
