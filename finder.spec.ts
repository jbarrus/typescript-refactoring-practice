import Thing from './thing';
import Finder from './finder';
import FT from './ft';

describe('finder', () => {
  let sue = new Thing();
  let greg = new Thing();
  let sarah = new Thing();
  let mike = new Thing();

  beforeEach(() => {
    sue.name = "Sue";
    sue.birthDate = new Date(50, 0, 1);
    greg.name = "Greg";
    greg.birthDate = new Date(52, 5, 1);
    sarah.name = "Sarah";
    sarah.birthDate = new Date(82, 0, 1);
    mike.name = "Mike";
    mike.birthDate = new Date(79, 0, 1);
  });

  it('should return empty results when given empty list', () => {
    const list: Thing[] = [];
    const finder = new Finder(list);

    const result = finder.Find(FT.One);
    expect(result.P1).toEqual(undefined);
    expect(result.P2).toEqual(undefined);
  });

  it('should return empty results when given on person', () => {
    const list: Thing[] = [];
    list.push(sue);

    const finder = new Finder(list);

    const result = finder.Find(FT.One);

    expect(result.P1).toEqual(undefined);
    expect(result.P2).toEqual(undefined);
  });

  it('should return closest two for two people', () => {
    const list: Thing[] = [];
    list.push(sue);
    list.push(greg);

    const finder = new Finder(list);

    const result = finder.Find(FT.One);

    expect(result.P1).toEqual(sue);
    expect(result.P2).toEqual(greg);
  });

  it('should return the furthest two for two people', () => {
    const list: Thing[] = [];
    list.push(mike);
    list.push(greg);

    const finder = new Finder(list);

    const result = finder.Find(FT.Two);

    expect(result.P1).toEqual(greg);
    expect(result.P2).toEqual(mike);
  });

  it('should return the furthest two for two people', () => {
    const list: Thing[] = [];
    list.push(mike);
    list.push(greg);

    const finder = new Finder(list);

    const result = finder.Find(FT.Two);

    expect(result.P1).toEqual(greg);
    expect(result.P2).toEqual(mike);
  });

  it('should return the furthest two for four people', () => {
    const list: Thing[] = [];
    list.push(sue);
    list.push(sarah);
    list.push(mike);
    list.push(greg);

    const finder = new Finder(list);

    const result = finder.Find(FT.Two);

    expect(result.P1).toEqual(sue);
    expect(result.P2).toEqual(sarah);
  });

  it('should return the closest two for four people', () => {
    const list: Thing[] = [];
    list.push(sue);
    list.push(sarah);
    list.push(mike);
    list.push(greg);

    const finder = new Finder(list);

    const result = finder.Find(FT.One);

    expect(result.P1).toEqual(sue);
    expect(result.P2).toEqual(greg);
  });
});
