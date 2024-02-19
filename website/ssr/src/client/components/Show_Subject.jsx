export default function Show_Subject({name}){

    // const images = importAll(require.context('./images/kinematyka/', false, /\.png/));
    // images = require.context('./images/kinematyka/', false, /\.png/).keys()
    return(
        <>

            <div className="outer">

                {/* <img src={require(`../${images/kinematyka/kine.png}`)} alt="asd" style={{width:"400px",}} /> */}
                {(require.context('./images/kinematyka/', false, /\.png/).keys()).map((key)=>{
                    console.log(key)
                    return(<img key = {key} src={require(key)} alt="asd" />)
                })}

            </div>
        </>
    )
}

// function importAll(r) {
//     let images = {};
//     r.keys().map(item => { images[item.replace('./', '')] = r(item); });
//     return images;
// }
// function importAll(r) {
//   return r.keys();
// }
const importAll = require =>
  require.keys().reduce((acc, next) => {
    console.log(next)
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});