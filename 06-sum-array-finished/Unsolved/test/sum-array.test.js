var expect = chai.expect;

describe("sumArray", function () {
  it("returns the total of all the numbers in `arr`", function () {
    var arr = [4, 8, 15, 16, 23, 42];

    var result = sumArray(arr);

    expect(result).to.eql(108);
  });
});

describe("sumArray2", function () {
  it("returns the total of all the numbers in `arr`", function () {
    var arr = [1, 2, 15, 10, 14, 8];

    var result = sumArray2(arr);

    expect(result).to.eql(50);
  });
});
