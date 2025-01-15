import Link from 'next/link'

export default function Details(){
    return(
        <div>

            <h2>This is the inside page of <b>nextapp</b>, which is the <b>details page.</b></h2>
            <Link href="../">Home</Link> <br />
            <Link href="/nextapp" >Next app</Link>
        </div>
    )
}