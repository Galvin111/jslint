const { getGreeting, getYearProgress } = require("./script.js");

describe("getGreeting", () => {
  test("says good morning at 8 AM", () => {
    expect(getGreeting(8)).toBe("Good morning");
  });

  test("says good afternoon at 3 PM", () => {
    expect(getGreeting(15)).toBe("Good afternoon");
  });

  test("says good evening at 9 PM", () => {
    expect(getGreeting(21)).toBe("Good evening");
  });
});

describe("getYearProgress", () => {
  test("is 0% on January 1", () => {
    expect(getYearProgress(new Date(2026, 0, 1))).toBe(0);
  });

  test("is about halfway on July 2", () => {
    expect(getYearProgress(new Date(2026, 6, 2))).toBe(49);
  });

  test("is 99% on December 31", () => {
    expect(getYearProgress(new Date(2026, 11, 31))).toBe(99);
  });
});
