export const sortStrings = (a: any, b: any) => {
    if (a.location > b.location) {
      return 1;
    }
    if (a.location < b.location) {
      return -1;
    }
    return 0;
};

export const isNextDate = (date: any) => new Date() <= new Date(date)

