import * as math from 'mathjs';

const MAX_PROBABLY_AGE_TO_LIVE = 80;

export abstract class WrapMath {
  public static average(data) {
    const sum = data.reduce((accu: number, curr: number) => {
      return accu + curr;
    });
    const quantity = data.length;
    return quantity !== 0 ? sum / quantity : 0;
  }

  public static std(data): number {
    return math.std(data);
  }

  public static possibleDateDead(age): any {
    const reimaning_age_to_live =  MAX_PROBABLY_AGE_TO_LIVE - parseInt(age, 10);
    const d = new Date();
    const year = d.getFullYear();
    const dateDead = new Date(d.getFullYear() + reimaning_age_to_live, d.getMonth(), d.getDate());
    return dateDead;
  }
}

