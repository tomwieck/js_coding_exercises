import {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
  } from "../challenges/exercise007";
  
  describe("sumDigits", () => {

    /**
    * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
    * @param {Number} n
    */

    test("returns the sum of all numbers passed in", () => {
      expect(sumDigits([1, 2, 3])).toBe(6);
      expect(sumDigits([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(45);
      expect(sumDigits([0, 0, 0, 0, 0])).toBe(0);
    });
  });
  
  describe("createRange", () => {
   /**
   * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
   * Both the start and the end numbers are inclusive.
   * Step is an optional parameter. If it is not provided, assume the step is 1.
   * @param {Number} start
   * @param {Number} end
   * @param {Number} step
   */

    test("returns a range of numbers when a start and end are passed in", () => {
      expect(createRange(3, 11)).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11]);
      expect(createRange(100, 110)).toEqual([100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110]);
    });

    test("returns a range of numbers in steps when a start, end and a step are passed in", () => {
      expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
      expect(createRange(100, 110, 5)).toEqual([100, 105, 110]);
    });
  });
  
  describe("getScreentimeAlertList", () => {
  /**
   * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
   * [
   *  {
   *    username: "beth_1234",
   *    name: "Beth Smith",
   *    screenTime: [
   *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
   *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
   *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
   *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
   *                ]
   *   },
   *   {
   *    username: "sam_j_1989",
   *    name: "Sam Jones",
   *    screenTime: [
   *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
   *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
   *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
   *                ]
   *   },
   * ]
   *
   * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
   * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
   * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
   * @param {Array} users
   */

   test("returns array of users with total screentime over 100 minutes for the passed in date", () => {
    expect(getScreentimeAlertList(
      [
        {
          username: "beth_1234",
          name: "Beth Smith",
          screenTime: [
                        { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                        { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                        { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                        { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                      ]
        },
        {
          username: "sam_j_1989",
          name: "Sam Jones",
          screenTime: [
                        { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                        { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                      ]
        }
      ],
      '2019-05-04')
    ).toEqual(['beth_1234']);

    expect(getScreentimeAlertList(
      [
        {
          username: "beth_1234",
          name: "Beth Smith",
          screenTime: [
            { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
            { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
          ]
        },
        {
          username: "sam_j_1989",
          name: "Sam Jones",
          screenTime: [
            { date: "2019-05-04", usage: { mapMyRun: 100, whatsApp: 0, facebook: 0, safari: 31} },
            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
            { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
          ]
        }
      ],
      '2019-05-04')
    ).toEqual(['beth_1234', 'sam_j_1989']);
  });

  test("returns an empty array if no users have over 100 minutes of screen time", () => {
    expect(getScreentimeAlertList(
      [
        {
          username: "beth_1234",
          name: "Beth Smith",
          screenTime: [
            { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
            { date: "2019-05-04", usage: { twitter: 10, instagram: 16, facebook: 61} },
          ]
        },
        {
          username: "sam_j_1989",
          name: "Sam Jones",
          screenTime: [
            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
            { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
          ]
        }
      ],
      '2019-05-04')
    ).toEqual([]);
  });

  test("returns an empty array if no dates match the screen time records", () => {
    expect(getScreentimeAlertList(
      [
        {
          username: "beth_1234",
          name: "Beth Smith",
          screenTime: [
            { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
            { date: "2019-05-04", usage: { twitter: 10, instagram: 16, facebook: 61} },
          ]
        },
        {
          username: "sam_j_1989",
          name: "Sam Jones",
          screenTime: [
            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
            { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
          ]
        }
      ],
      '2020-05-04')
    ).toEqual([]);
  });
});
  
  describe("hexToRGB", () => {
  /**
   * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
   * https://www.youtube.com/watch?v=u_atXp-NF6w
   * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
   * Colours can also be represented in RGB format, using decimal notation.
   * This function should transform the hex code into an RGB code in the format:
   * "rgb(255,17,51)"
   * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
   * @param {String} str
   */

    test("returns the RGB code of the hexadecimal value passed in", () => {
      expect(hexToRGB('#FFFFFF')).toBe('rgb(255,255,255)');
      expect(hexToRGB('#000000')).toBe('rgb(0,0,0)');
    });

    test("accepts both #FFFFFF and FFFFFF hex formats", () => {
      expect(hexToRGB('#FFFFFF')).toBe('rgb(255,255,255)');
      expect(hexToRGB('FFFFFF')).toBe('rgb(255,255,255)');
    });
  });
  
  describe("findWinner", () => {
  /**
   * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
   * [
   *  ["X", "0", null],
   *  ["X", null, "0"],
   *  ["X", null, "0"]
   * ]
   * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
   * @param {Array} board
   */
  });

  