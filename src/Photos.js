import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map((photo, index) => {
            console.log(photo);
            if (index < 9) {
              return (
                <div className="col-4" key={index}>
                  <a
                    href={photo.src.original}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      src={photo.src.landscape}
                      className="img-fluid"
                      alt={photo.alt}
                    ></img>
                  </a>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
