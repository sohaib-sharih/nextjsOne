import styles from '../styles/nextapp.module.css'
export default function Home() {
  return (
    <>
    
    
    <header>
      <nav>
        <ul className="${styles.ul} flex justify-evenly">

        <li><a href="#home">Home</a></li>
        <li><a href="#About">About us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    <div className=" font-[family-name:var(--font-geist-sans)] grid grid-row-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20" >
      <h2>Homepage of Pakistan's Website</h2>
      <h1>Topics Covered</h1>
      <h2>Routes</h2>
      <h2>Nested Routes</h2>
      <h2>Difference between App router and Pages Router</h2>
      <h2>Dynamic Routes Vs Nested Dynamic Routes</h2>
      <h2>Catch all Segments: </h2>
      <h2>Page not found</h2>
      
    </div>
    
    </>
  );
}
