import "../app/globals.css"
import Link from "next/link"
const Header = ()=>{
    return(
        <div>
            <div className="header">
                <h1>To The New</h1>
                <h2>Web Development</h2>
            </div>
            <ul className="header-ul">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/products">Products</Link></li>
            </ul>
        </div>
    );
};

export default Header ;