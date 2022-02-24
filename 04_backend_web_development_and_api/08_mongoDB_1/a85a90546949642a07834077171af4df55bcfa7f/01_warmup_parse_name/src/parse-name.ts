type Person = {
  firstName: string;
  lastName: string;
};

export function parseName(name: string): Person {
  const names = name.split(" ");

  for (let i = 0; i < names.length; i++) {
    const objet: Person = {
      firstName: names[i],
      lastName: names[i + 1],
    };
    return objet;
  }
}
//console.log(`"firstName": ${names[0]} , "lastName": ${names[1]}`);
