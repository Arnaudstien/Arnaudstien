// Code here
type CustomerType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
};

function getEmails(email: CustomerType[]): string[] {
  console.log(email.map);

  return email.map((element) => element.email);
}

export { getEmails };
