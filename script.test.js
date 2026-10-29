const { getGreeting, getPostingTip } = require("./script.js");

describe("getGreeting", () => {
  test("says good morning at 8 AM", () => {
    expect(getGreeting(8)).toBe("Magandang umaga");
  });

  test("says good afternoon at 3 PM", () => {
    expect(getGreeting(15)).toBe("Magandang hapon");
  });

  test("says good evening at 9 PM", () => {
    expect(getGreeting(21)).toBe("Magandang gabi");
  });
});

describe("getPostingTip", () => {
  test("lunch hour is peak", () => {
    expect(getPostingTip(12).live).toBe(true);
  });

  test("8 PM is peak", () => {
    expect(getPostingTip(20).live).toBe(true);
  });

  test("3 AM is off-peak", () => {
    expect(getPostingTip(3).live).toBe(false);
  });
});
