export default function Bar({child}){
    <>
        <div className="outer">
        <div className="bar"></div>
        {child}
        <div className="bar"></div>
        </div>
    </>


}