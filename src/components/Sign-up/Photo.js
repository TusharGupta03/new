import React from "react";
import "./Photo.css";
import cross from "../../images/cross2.png";

export default function Photo(props) {
  return (
    <div className="photo-container">
      <div className="container">
        {props.previewUrl[props.index] ? (
          <div>
            {" "}
            <img
              className="imagee"
              src={
                props.previewUrl[props.index]
                  ? props.previewUrl[props.index]
                  : null
              }
              alt="Upload"
            />
            <img
              src={cross}
              alt=""
              className="cross"
              onClick={props.Handel_cross}
              id={props.index}
            />
          </div>
        ) : (
          <div>
            {" "}
            <div
              className="before-upload"
              id={props.index}
              onClick={props.Handel_browse}
            >
              <div className="cross2" id={props.index}>
                Upload Your Pic Here
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="upload">
        <input
          type="file"
          name={props.index}
          className="input-file"
          id=""
          onChange={props.Handel_onchange}
        />
      </div>
    </div>
  );
}
