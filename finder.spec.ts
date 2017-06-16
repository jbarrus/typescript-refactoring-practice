import Person from './person';
import AgeGapFinder from './age-gap-finder';

describe('finder', () => {
  let sue = new Person();
  let greg = new Person();
  let sarah = new Person();
  let mike = new Person();

  beforeEach(() => {
    sue.name = 'Sue';
    sue.birthDate = new Date(50, 0, 1);
    greg.name = 'Greg';
    greg.birthDate = new Date(52, 5, 1);
    sarah.name = 'Sarah';
    sarah.birthDate = new Date(82, 0, 1);
    mike.name = 'Mike';
    mike.birthDate = new Date(79, 0, 1);
  });

  it('should return empty results when given empty list', () => {
    const list: Person[] = [];
    const result = AgeGapFinder.findClosest(list);
    expect(result.youngerPerson).toEqual(undefined);
    expect(result.olderPerson).toEqual(undefined);
  });

  it('should return empty results when given one person', () => {
    const list: Person[] = [];
    list.push(sue);

    const result = AgeGapFinder.findClosest(list);

    expect(result.youngerPerson).toEqual(undefined);
    expect(result.olderPerson).toEqual(undefined);
  });

  it('should return closest two for two people', () => {
    const list: Person[] = [];
    list.push(sue);
    list.push(greg);

    const result = AgeGapFinder.findClosest(list);

    expect(result.youngerPerson).toEqual(sue);
    expect(result.olderPerson).toEqual(greg);
  });

  it('should return the furthest two for two people', () => {
    const list: Person[] = [];
    list.push(mike);
    list.push(greg);

    const result = AgeGapFinder.findFurthest(list);

    expect(result.youngerPerson).toEqual(greg);
    expect(result.olderPerson).toEqual(mike);
  });

  it('should return the furthest two for two people', () => {
    const list: Person[] = [];
    list.push(mike);
    list.push(greg);

    const result = AgeGapFinder.findFurthest(list);

    expect(result.youngerPerson).toEqual(greg);
    expect(result.olderPerson).toEqual(mike);
  });

  it('should return the furthest two for four people', () => {
    const list: Person[] = [];
    list.push(sue);
    list.push(sarah);
    list.push(mike);
    list.push(greg);

    const result = AgeGapFinder.findFurthest(list);

    expect(result.youngerPerson).toEqual(sue);
    expect(result.olderPerson).toEqual(sarah);
  });

  it('should return the closest two for four people', () => {
    const list: Person[] = [];
    list.push(sue);
    list.push(sarah);
    list.push(mike);
    list.push(greg);

    const result = AgeGapFinder.findClosest(list);

    expect(result.youngerPerson).toEqual(sue);
    expect(result.olderPerson).toEqual(greg);
  });
});
