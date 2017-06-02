import Thing from './thing';
import F from './f';
import FT from './ft';

export default class Finder {
  constructor(private p: Thing[]) {}
  
  Find(ft: FT): F {
    const tr: F[] = [];
  
    for (let i = 0; i < this.p.length - 1; i++) {
      for (let j = i + 1; j < this.p.length; j++) {
        const r = new F();
        if (this.p[i].birthDate.getTime() < this.p[j].birthDate.getTime()) {
          r.P1 = this.p[i];
          r.P2 = this.p[j];
        } else {
          r.P1 = this.p[j];
          r.P2 = this.p[i];
        }
        r.D = r.P2.birthDate.getTime() - r.P1.birthDate.getTime();
        tr.push(r);
      }
    }
  
    if (tr.length < 1) {
      return new F();
    }
  
    let answer = tr[0];

    for (let i=0; i<tr.length; i++) {
      const result: F = tr[i];
      switch (ft) {
        case FT.One :
          if (result.D && answer.D && result.D < answer.D) {
            answer = result;
          }
          break;
  
        case FT.Two :
          if (result.D && answer.D && result.D > answer.D) {
            answer = result;
          }
          break;
      }
    }
  
    return answer;
  }
}