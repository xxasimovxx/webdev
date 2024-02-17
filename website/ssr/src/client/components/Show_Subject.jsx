export default function Show_Subject({name}){

    const images = importAll(require.context('../images/kinematyka/', false, /\.png/));

    return(
        <>

            <div className="outer">

                {/* <img src={require(`../${images/kinematyka/kine.png}`)} alt="asd" style={{width:"400px",}} /> */}
                {(Object.keys(images)).map((key)=>{
                    console.log(key)
                    return(<img key = {key} src={require(`${key}`)} alt="asd" />)
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