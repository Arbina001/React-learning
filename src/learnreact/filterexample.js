const people = [
  {
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  },
  {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  },
  {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  },
  {
    name: 'Percy Lavon Julian',
    profession: 'chemist',
  },
  {
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  },
];

var details = people.map((info) => (
  <>
    <li> id:{info.id}</li>
    <li>name:{info.name}</li>
    <li> name:{info.profession}</li> <br />
  </>
));

//this is filter 
var firstexample = people.filter (hide=>hide.profession==="chemist")

var okk = firstexample.map ((go)=> (
  <>
  <li> profession- {go.profession} </li>
    <li> name- {go.name}</li>
    <li> id-  {go.id}</li>
    
    
  </>
))
export const Filters = () => {
  return <>
  
  {okk}
  {/* {details} */}</>;
};
