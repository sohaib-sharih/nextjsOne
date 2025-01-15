export default function blogid({params,}:{ params: {blogid: string}}){
    return(
        <>
        <h1>blog page {params.blogid}</h1>
        <h2>{params.blogid.length}</h2>
        </>

    )
}