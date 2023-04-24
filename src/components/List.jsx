import { data } from "../data";
import Person from "./Person";



export const List = ({person}) => {
 const [person, setPerson]=useState(data)
  return (
    <>
      <h3>{person.length} birthdays today</h3>
     {person.map((person) => {
       const { name, id, age, image } = person; 
      return (
      </Person>
      )
       })} 
    </>
  );
}
