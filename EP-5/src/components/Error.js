import { useRouteError } from "react-router-dom";
const Error = () =>{
    const err = useRouteError();
    console.log("----", err)
    return (
        <>
        <h1> OPPS!!...Error : Something went wrong!!!</h1>
        <span>{err.status} : {err.statusText}</span>
        </>
        
    )
}
export default Error;