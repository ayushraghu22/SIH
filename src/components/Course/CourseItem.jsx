import "./courseItem.scss";
import React, { Component } from "react";
import downloadPng from "../../images/download.png";

import videoURL from "../../images/sampleVideo.mp4";

const CourseItem = (props) => {
  let { title, description, imageUrl, url, publishedAt, author, source } =
    props;

  const handleVideoDownload = () => {
    try {
      const videoRequest = new Request(videoURL);
      fetch(videoRequest)
        .then(() => {
          const aTag = document.createElement("a");
          aTag.href = videoURL;
          const fileName = videoURL.split("/").pop();
          aTag.setAttribute("download", fileName);
          document.body.appendChild(aTag);
          aTag.click();
          aTag.remove();
        })
        .catch((e) =>
          console.log("Error while downloading the image", e.message)
        );
    } catch {
      console.log("Error while downloading the image");
    }
  };

  return (
    <div className="courseItem">
      <div className="card h-100">
        <img
          src={imageUrl}
          style={{ height: "20rem" }}
          className="card-img-top"
          alt="..."
        />

        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Anonymous"} at{" "}
              {new Date(publishedAt).toGMTString()}
            </small>
          </p>
          <p className="card-text">
            {description != "" ? description : "No description available!"}...
          </p>
          <a href={url} className="btn btn-sm btn-primary">
            Open video
          </a>
          <button className="download" onClick={handleVideoDownload}>
            <img src={downloadPng} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
