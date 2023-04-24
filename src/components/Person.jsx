import { useState } from "react"
import { data } from "../data"
 
const Person = () => {
 
 const [person, setPerson]=useState(data)
 return (
   <>
     <h3>{person.length} birthdays today</h3>
     {person.map((person) => {
       const { name, id, age, image } = person;
       return (
         <article className='person' key={id}>
           <img src={image} className='img' alt='image'></img>
           <div>
             <h4>{name}</h4>
             <p>{age} years</p>
           </div>
         </article>
       );
     })}
     <button type='button' className="btn btn-block" onClick={()=>setPerson([])}>click me</button>
   </>
 );
}

export default Person