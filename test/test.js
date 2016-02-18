import expect from 'expect';
import {test} from '../src/index';

describe('test', () => {
  it('should return the number', () => {
    const num = 2;
    expect(test(num)).toEqual(num);
  });
});
