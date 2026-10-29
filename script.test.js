const { getYearProgress, getDaysLeft } = require("./script.js");

describe("getYearProgress", () => {
  test("is 0% at the start of the year", () => {
    expect(getYearProgress(new Date(2026, 0, 1))).toBe(0);
  });

  test("is 50% at the middle of the year", () => {
    expect(getYearProgress(new Date(2026, 6, 2, 12))).toBe(50);
  });
});

describe("getDaysLeft", () => {
  test("365 days left on January 1 of a normal year", () => {
    expect(getDaysLeft(new Date(2026, 0, 1))).toBe(365);
  });

  test("366 days left on January 1 of a leap year", () => {
    expect(getDaysLeft(new Date(2028, 0, 1))).toBe(366);
  });

  test("1 day left on December 31", () => {
    expect(getDaysLeft(new Date(2026, 11, 31))).toBe(1);
  });
});
