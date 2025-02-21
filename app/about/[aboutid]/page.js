import about from "@/JsonDatabase/about.json"
import "@/app/globals.css"
import React from 'react' ;

function About({params}){
    const aboutid = parseInt(params.aboutid, 10) ;
    const employee = about.employees.find(emp => emp.id === aboutid) ;
    if(!employee){
        return <div className="employee"><h1>Employee not found</h1></div>
    }
    return(
        <div className='employee'>
            <h1>Employee {employee.name}</h1>
            <p>Position: {employee.position}</p>
            <p>Email: {employee.email}</p>
        </div>
    );
}
export default About ;
