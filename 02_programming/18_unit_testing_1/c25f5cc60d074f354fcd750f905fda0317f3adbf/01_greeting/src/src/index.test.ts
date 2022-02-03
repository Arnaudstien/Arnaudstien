import { greet } from "..";

describe(" Greet dois renvoyer string", () => {
  test("si parametre greet vide return hello WORLD", () => {
    const result = greet();
    expect(result).toBe("Hello WORLD!");
    // expect something
  });

  test("si parametre greet contient francis return hello FRANCIS", () => {
    const result = greet("francis");
    expect(result).toBe("Hello FRANCIS!");

    // expect something else
  });
});
