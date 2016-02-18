import expect from 'expect';
import * as mathematical from '../src/index';

describe('square()', () => {
  let tests = [{
    arg: 1,
    expected: 1
  }, {
    arg: 2,
    expected: 4
  }, {
    arg: 3,
    expected: 9
  }, {
    arg: 10,
    expected: 100
  }];

  tests.forEach(test => {
    it(`returns the square of ${test.arg} as ${test.expected}`, () => {
      expect(mathematical.square(test.arg)).toEqual(test.expected);
    });
  });
});

describe('cubed()', () => {
  let tests = [{
    arg: 1,
    expected: 1
  }, {
    arg: 2,
    expected: 8
  }, {
    arg: 3,
    expected: 27
  }, {
    arg: 10,
    expected: 1000
  }];

  tests.forEach(test => {
    it(`returns the cube of ${test.arg} as ${test.expected}`, () => {
      expect(mathematical.cubed(test.arg)).toEqual(test.expected);
    });
  });
});
