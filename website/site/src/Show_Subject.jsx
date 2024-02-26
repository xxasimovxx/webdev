const importAll = (require) =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});

const images = Object.keys(
  importAll(require.context("./images", false, /\.png/)))



export default function Show_Subject({ name }) {
  return (
    <>
      <div className="outer">
        {
          images.map(key => {
            return (<div key = {key}>
              <img key={key} src={require("./images/" + key)} alt="asd" />,
              </div>
          )
          })}
      </div>
    </>
  );
}
