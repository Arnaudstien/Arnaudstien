import { Customer } from "../data/customers";

export function filterByFirstLetter(custumers: Customer[], letter: string): Customer[] {
  const cust = custumers;
  console.log("mfmfmfmfmfm", letter);

  const result = cust.filter((elem) => elem.last_name.charAt(0) === letter);
  return result;
  console.log(result);
}
// var heroes = [
//   {name: “Batman”, franchise: “DC”},
//   {name: “Ironman”, franchise: “Marvel”},
//   {name: “Thor”, franchise: “Marvel”},
//   {name: “Superman”, franchise: “DC”}
// ];

// var marvelHeroes =  heroes.filter(function(hero) {
//   return hero.franchise == “Marvel”;
// });

// [ {name: “Ironman”, franchise: “Marvel”}, {name: “Thor”, franchise: “Marvel”} ]

//filterByFirstLetter(Custumer, "B");
