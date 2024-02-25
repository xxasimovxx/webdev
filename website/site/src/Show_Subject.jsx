const importAll = (require) =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});

export default function Show_Subject({ name }) {
  console.log(typeof Object.keys(
          importAll(require.context("./images", false, /\.png/))))
  return (
    <>
      <div className="outer">
        {Object.keys(
          importAll(require.context("./images", false, /\.png/))
        ).map(key => {
           return (
            <img key={key} src={require("./images/" + key)} alt="asd" />,
          )
        })}
      </div>
    </>
  );
}
