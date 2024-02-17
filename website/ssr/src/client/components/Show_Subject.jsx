
export default function Show_Subject({name}){

    const images = importAll(require.context('../images/kinematyka', false, /\.png/)).keys;
    return(
        <>

            <div className="outer">

<img src={require("../images/kinematyka/kine.png")} alt="asd" />
                {images?.map((key)=>{
                    return(
                        <img src={key} alt="asd" />
                    )
                })}

            </div>
        </>
    )
}

function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}