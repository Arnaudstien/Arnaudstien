import { toWords } from "..";

describe(" toWords dois renvoyer un tableau ", () => {
  test("test si  sentence renvois en tableau ", () => {
    const result = toWords("TroTro est meilleur que PepaPig!");

    expect(result).not.toEqual("TroTro est meilleur que PepaPig!");
    //console.log(typeof result);
    expect(typeof result).toBe("object");
    //console.log(Array.isArray(result));
    expect(Array.isArray(result)).toBe(true);
  });
  test("test si toWord renvois le bon resultat", () => {
    const result = toWords("TroTro est meilleur que PepaPig!");
    //console.log(result.includes("!"));
    expect(result.includes("!")).toBe(false);
  });
});
