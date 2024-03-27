import { useRouteError } from "react-router-dom"

const Error = ()=>{
    const err = useRouteError();
    console.log(err)
    return (
        <>
            <h1>Oppps This page doesnt exist!</h1>
            <h2>{err.data}</h2>
        </>

    )
}
export default Error