import moment from "moment";

//function formatDate(moment) {
//  return moment().format("LLLL");
function formatDate(moment) {
  moment.locale("de");
  console.log(moment().format("LLLL"));
  console.log(moment.max(moment("2016-01-01")));
}

//### formatDate

//Should return a string of the given date with the following format:

//```js
//formatDate("2000-05-31"); // Wednesday 31st May 2000
//```

export { formatDate };
