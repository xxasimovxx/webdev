import { useState } from "react";

const importAll = (require) =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});

export default function Show_Subject({ name }) {
  const [blurred, setBlurred] = useState(true);

  const handleCLick = () => {
    setBlurred(!blurred);
  };

  const images = Object.keys(
    importAll(require.context("./images", true, /\.png/)),
  );

  return (
    <>
      <div className="outer">
        {images.map((key) => {
          if (key.split("/").includes(name)) {
            return (
              <div key={key + "out"} className="image-outer">
                <img className="image-task" key={key} src={require("./images/" + key)} alt="asd" />
                <div className="answer-container">
                  <div className="image-outer">
                    <img
                      key={key + "odpowiedz"}
                      src={require(
                        "./odpowiedz/" + key.split(".")[0] + "-odpowiedz.png",
                      )}
                      style={{
                        filter: blurred ? "blur(5px)" : "",
                        zIndex: "1",
                      }}
                      onClick={handleCLick}
                      alt="asd"
                    />
                    <h1
                      style={{
                        position: "absolute",
                        visibility: blurred ? "" : "hidden",
                        zIndex: "2",
                      }}
                    >
                      Show Answer
                    </h1>
                  </div>
                </div>
                ,
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
