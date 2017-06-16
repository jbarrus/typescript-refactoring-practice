import Person from './person';
import AgeGap from './age-gap';

enum BirthDateComparisonType {
  CLOSEST, FARTHEST
}

export default class AgeGapFinder {
  static findClosest(people: Person[]): AgeGap {
    return this.find(people, BirthDateComparisonType.CLOSEST);
  }

  static findFurthest(people: Person[]): AgeGap {
    return this.find(people, BirthDateComparisonType.FARTHEST);
  }
  
  private static find(people: Person[], ft: BirthDateComparisonType): AgeGap {
    const allAgeGaps = this.calculateAllAgeGaps(people);

    if (allAgeGaps.length < 1) {
      return new AgeGap();
    }

    let answer = allAgeGaps[0];

    for (let i=0; i<allAgeGaps.length; i++) {
      const result: AgeGap = allAgeGaps[i];
      switch (ft) {
        case BirthDateComparisonType.CLOSEST :
          if (result.gapInMillis && answer.gapInMillis && result.gapInMillis < answer.gapInMillis) {
            answer = result;
          }
          break;

        case BirthDateComparisonType.FARTHEST :
          if (result.gapInMillis && answer.gapInMillis && result.gapInMillis > answer.gapInMillis) {
            answer = result;
          }
          break;
      }
    }

    return answer;
  }

  private static calculateAllAgeGaps(people: Person[]) {
    const ageGaps: AgeGap[] = [];

    for (let i = 0; i < people.length - 1; i++) {
      for (let j = i + 1; j < people.length; j++) {
        const r = new AgeGap();
        if (people[i].birthDate.getTime() < people[j].birthDate.getTime()) {
          r.youngerPerson = people[i];
          r.olderPerson = people[j];
        } else {
          r.youngerPerson = people[j];
          r.olderPerson = people[i];
        }
        r.gapInMillis = r.olderPerson.birthDate.getTime() - r.youngerPerson.birthDate.getTime();
        ageGaps.push(r);
      }
    }
    return ageGaps;
  }
}