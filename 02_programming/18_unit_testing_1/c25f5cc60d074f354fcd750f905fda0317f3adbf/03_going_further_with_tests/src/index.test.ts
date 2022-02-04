let mockArray: string | any[] = [];
let mockObject = {};

beforeEach(() => {
  mockArray = [];
  mockObject = {};
});

describe("Let the tests on arrays begin !", () => {
  // The following arrays are a short list of "must watch" movies.
  // Write a test for each of them, respecting the conditions written in the requirements.
  // Be sure to always test if you test passes with the right conditions but also if
  // it does fail with the wrong conditions. Don't forget `expect.assertions`!

  // Here's an example:
  test("Should be a collection of 2 movies", () => {
    expect.assertions(1);

    mockArray = ["Into the wild", "Alien the 8th passenger"];

    expect(mockArray.length).toBe(2);
  });

  // Create a test that ensures that "Alien the 8th passenger" is present in mockArray.
  test("Alien the 8th passenger is present in mockArray", () => {
    expect.assertions(1);
    mockArray = ["Into the wild", "Alien the 8th passenger", "Ip Man", "Tombeau des lucioles", "fight club"];
    //console.log(mockArray.includes("Alien the 8th passenger"));
    expect(mockArray.includes("Alien the 8th passenger")).toEqual(true);
  });

  test("Indiana Jones 4 is not present in mockArray", () => {
    expect.assertions(1);
    // Create a test that fails if "Indiana Jones 4" is present in mockArray.
    mockArray = ["Into the wild", "Alien the 8th passenger", "Ip Man", "Tombeau des lucioles", "fight club"];
    //console.log(mockArray.includes("Indiana Jones 4"));
    expect(mockArray.includes("Indiana Jones 4")).toBe(false);
  });

  test("The list as less than 5 elements", () => {
    expect.assertions(1);
    // Create a test fails if the list has less than 5 elements.
    mockArray = [
      "Lord of the rings : the return of the king",
      "Into the wild",
      "Alien the 8th passenger",
      "Tombeau des lucioles",
      "fight club",
    ];
    //console.log(mockArray.length <s5);
    expect(mockArray.length < 5).toBe(false);
  });
});
test("The list contains string elements", () => {
  expect.assertions(1);
  // Create a test that checks if the array only contains String element.
  // Remember that a test is code, you are not limited to using `expect`.
  mockArray = [
    "Lord of the rings : the return of the king",
    "Into the wild",
    "Alien the 8th passenger",
    "Tombeau des lucioles",
    "fight club",
  ];
  let flag = true;
  for (let i = 0; i < mockArray.length; i++) {
    const element = mockArray[i];
    if (typeof element === "string") {
      flag = true;
    } else {
      flag = false;
      //console.log("p============================", flag);
    }
  }
  //console.log(mockArray.length <s5);
  expect(flag).toBe(true);
});

test("The list contains Lord of the rings elements", () => {
  expect.assertions(1);

  // Create a test that passes if there's at least one film with "Lord of the rings" inside mockArray.
  mockArray = [
    "Lord of the rings : the return of the king",
    "Into the wild",
    "Alien the 8th passenger",
    "Tombeau des lucioles",
    "fight club",
  ];

  let inside;
  let notinside;
  for (let i = 0; i < mockArray.length; i++) {
    const element = mockArray[i];

    const text = "Lord of the rings";
    if (element.includes(text)) {
      inside = true;
    } else {
      notinside = false;
    }
  }
  expect(inside).toBe(true);
});
//Create a test that checks if the elements in mockArray respect that the strings are the same with the right order as solutionArray
//eg : mockArray = ["Blue","Blue","Red", "Yellow"] would fail the test
test("checks if the elements are the same", () => {
  expect.assertions(1);
  mockArray = ["Blue", "Red", "Blue", "Yellow"];
  const solutionArray = ["Blue", "Red", "Blue", "Yellow"];
  let trueelem;
  let falseelme;
  let result;
  for (let i = 0; i < mockArray.length; i++) {
    const element1 = mockArray[i];
    for (let i = 0; i < solutionArray.length; i++) {
      const element2 = solutionArray[i];

      if (element1 === element2) {
        trueelem = true;
      } else {
        falseelme = false;
      }

      if (trueelem === true && falseelme === false) {
        result = false;
      } else {
        result = true;
      }
    }
  }

  expect(result).toBe(false);
});

// Create a test that ensures that your 'command' object contains at least `fries: true` and `sauce: "Hannibal"` without checking properties one by one
// You should do it with only one assertion.
// Hint: we want our mock object to _match_ another smaller object (look at the documentation!)

describe("Let the tests on objects begin !", () => {
  test("checks if object contains at least `fries: true` and `sauce: Hannibal", () => {
    expect.assertions(2);
    mockObject = {
      sauce: "Hannibal",
      fries: true,
      kebab: "Double",
      soda: "Sprite",
    };
    console.log("=========================================", mockObject);
    expect(mockObject).toHaveProperty("sauce");
    expect(mockObject).toHaveProperty("fries");

    //expect(mockObject).toBe();

    console.log(mockObject);
  });
});

//At the end, your file should contain 7 test (8 with the given example).
