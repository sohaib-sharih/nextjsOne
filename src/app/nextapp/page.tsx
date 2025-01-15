import Link from 'next/link';
import styles from '/src/styles/nextapp.module.css';
export default function Nextapp(){
    // return(
        
    // <h2 className="text-3xl">This is a page for next app</h2>
    
    // )
    return(
        <div className={styles.container}>


        <Link href="/nextapp/details" style={{color: 'green'}}>Details</Link><br />
        <Link href="./" className={styles.heading}>home</Link>
        </div>

    )
}