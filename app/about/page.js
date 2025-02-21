import about from "@/JsonDatabase/about.json"
import "@/app/globals.css"
export default function About(){
    return(
        <div className="about">
            <h1>{about.name}</h1>
            <p>{about.description}</p>
            <p>{about.mission}</p>
            <p>{about.contact.email}</p>
            <p>{about.contact.phone}</p>
            <p>{about.contact.address}</p>
        </div>
    )
}   
