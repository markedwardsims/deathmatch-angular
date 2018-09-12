import { ArraySortPipe } from './array-sort.pipe';

let pipe: ArraySortPipe;

describe('ArraySortPipe', () => {

  beforeEach(() => {
    pipe = new ArraySortPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sort ascending by default', () => {
    const mockArray = [
      {name: 'foo'},
      {name: 'bar'},
      {name: 'baz'},
      {name: 'bash'}
    ];
    expect(pipe.transform(mockArray, 'name')).toEqual([
      {name: 'bar'},
      {name: 'bash'},
      {name: 'baz'},
      {name: 'foo'}
    ]);
  });

  it('should sort descending', () => {
    const mockArray = [
      {name: 'foo'},
      {name: 'bar'},
      {name: 'baz'},
      {name: 'bash'}
    ];
    expect(pipe.transform(mockArray, 'name', true)).toEqual([
      {name: 'foo'},
      {name: 'baz'},
      {name: 'bash'},
      {name: 'bar'}
    ]);
  });

});
