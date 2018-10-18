jest.mock('DatePickerIOS', () => 'DatePickerIOS');

const constantDate = new Date('2000');
/*eslint no-global-assign:off*/
Date = class extends Date {
  constructor() {
    super();
    return constantDate;
  }
};
