import capitalizeFirstLetter from "../helpers/capitalizeFirstLetter";

describe("capitalizeFirstLetter()", () => {
  it("should capitalize the first letter and lowercase the rest (1)", () => {
    expect(capitalizeFirstLetter("test string")).toBe("Test string");
  });

  it("should capitalize the first letter and lowercase the rest (2)", () => {
    expect(capitalizeFirstLetter("AnOtHeR Test String")).toBe(
      "Another test string"
    );
  });

  it("should return and empty string if given string is empty", () => {
    expect(capitalizeFirstLetter("")).toBe("");
  });

  it("should return and empty string if given string is null or undefined", () => {
    expect(capitalizeFirstLetter(null)).toBe("");
    expect(capitalizeFirstLetter(undefined)).toBe("");
  });
});
