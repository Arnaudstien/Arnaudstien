// code here
import { Customer } from "../data/customers";

export function filterByFirstLetter(custumers: Customer[], letter: string): Customer[] {
  const cust = custumers;
  console.log("mfmfmfmfmfm", letter);

  const result = cust.filter((elem) => elem.last_name.charAt(0) === letter);
  return result;
}
export function filterByFirstLetterOrdered(clients: Customer[], letters: string): Customer[] {
  console.log("clients", clients);
  console.log("letters", letters);
  const essais = clients.sort((a, b) => (a.last_name > b.last_name ? 1 : -1));
  console.log(essais);
  return filterByFirstLetter(essais, letters);
}
