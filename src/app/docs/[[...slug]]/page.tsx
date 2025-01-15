export default function Docs({
    params,
}: {
    params:
 {
    slug: string[]
    
}
})
{
    if (params.slug?.length == 2){
        return <h2>Home page of docs with a feature of /n{params.slug[0]} and SECTION /n{params.slug[1]}</h2>

    } else if (params.slug?.length === 1){
        return <h2>only FEature: {params.slug[0]}</h2>
    }
    return(
        <div>
            <h1>ELSE BLOCK Docs Home Page {params.slug}</h1>
        </div>
    )
}