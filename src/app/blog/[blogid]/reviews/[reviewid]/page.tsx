import { list } from "postcss";
import { styleText } from "util";

export default function Reviewid({
    params,
}:
    {

        params: {
            blogid: string;
            reviewid: string;
        }
    }) {
    return (
        
        <div>

        <h1>Product {params.blogid} and review{params.reviewid} and the reviewid's length is {params.reviewid.length}</h1>
        <p>The <b>params</b> is a <b>prop</b> that is of an <b>object type</b>, containing 2 <b>key/value pairs</b>, one is <b>blogid</b> and the other is <b>reviewid.</b></p>
        <ol type={"1"}>
            <li>This is a <b>nested dynamic route.</b></li>
            <li>Make a folder with <b>square brackets</b>.</li>
            <li>Create a <b>page.tsx</b> file inside the square brackets folder.</li>
            <li>use the <b>params prop.</b></li>
            <li>Define the objects you will be using, example: <b>blogid</b> and <b>reviewid.</b></li>
            <li>Use the <b>params.reviewid</b> enclosed in <b>curly braces</b> inside your <b>jsx</b> block.</li>
            <li>View the properties on display, as the number or alphabet used in the url <b>blog/200/reviews/333</b></li>
        </ol>
        </div>
        
    )
}