const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist',
];

export const Rendar = () => {
  var livingbing = people.map((human) => <li><h1>{human}</h1></li>);
  return <>{livingbing}</>;
};
