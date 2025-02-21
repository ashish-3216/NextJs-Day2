import "@/app/globals.css"
export default function ContactUs(){
    return(
        <div className="contact-us">
            <h1>Contact Us</h1>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Submit</button>
            </form> 
        </div>
    )
}
