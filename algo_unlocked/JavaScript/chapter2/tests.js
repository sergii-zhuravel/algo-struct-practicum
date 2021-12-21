var assert = chai.assert;
describe("linearSearch", function () {
  describe("linearSearch()", function () {
    const arr = [2, 3, 4, 5];
    it("should return 3 when the value is present", function () {
      assert.equal(3, linearSearch(arr, arr.length, 5));
    });
    it("should return null when the value is not present", function () {
      assert.equal(null, linearSearch(arr, arr.length, 6));
    });
  });
});
