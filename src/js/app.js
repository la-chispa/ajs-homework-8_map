export default class ErrorRepository {
  constructor() {
    this.errors = new Map([[1, 'Wrong name!'], [2, 'Wrong type!'], [3, 'What is dead may never level up'], [4, 'This character is in the team already']]);
  }

  translate(code) {
    return (this.errors.has(code)) ? this.errors.get(code) : 'Unknown error';
  }
}
