type Profile = {
  name: string;
  age: number;
  country: string;
  haveTraveled: boolean;
};

export function assembleData(names: string, ages: number[], countries: string, traveled: boolean): any {
  //console.log(names, ages, countries, traveled);
  // console.log(ages);
  // console.log(countries);
  //console.log(traveled);

  const objet: string[] = [];
  for (let i = 0; i < names.length; i++) {
    const element = names[i];
    objet.push("names: " + element);

    ages.forEach((elem) => {
      //objet.push(elem);
      //console.log(elem);
      objet.push("names: " + element && "age " + elem);

      for (let i = 0; i < countries.length; i++) {
        const elements = countries[i];
        objet.push("names: " + element && "age: " + elem && "countries: " + elements);

        //console.log(elem);
        objet.push("names: " + element && "age " + elem && "countries: " + elements && "countrie " + elem);
      }
    });
  }
  console.log(objet);

  //return [];
  //objet.push(
  // "names " + names[0] && "age: " + ages[0] && "countries " + countries[0] && "haveTraveled " + haveTraveled[0],
  //);
  //objet.push("names " + names[0] && "age: "+ ages[0] && "countries "+ countries[0] && "haveTraveled " + haveTraveled[0] );
  //objet.push("names " + names[0] && "age: "+ ages[0] && "countries "+ countries[0] && "haveTraveled " + haveTraveled[0] );
  //objet.push("names " + names[0] && "age: "+ ages[0] && "countries "+ countries[0] && "haveTraveled " + haveTraveled[0] );
}

//return objet;

// Code here
