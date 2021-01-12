import ErrorRepository from '../app';

test.each([
  [1, 'Wrong name!'],
  [2, 'Wrong type!'],
  [3, 'What is dead may never level up'],
  [4, 'This character is in the team already'],
])(
  ('check errors'),
  (code, description) => {
    const repository = new ErrorRepository();
    expect(repository.errors.get(code)).toBe(description);
  },
);

test.each([
  [1, 'Wrong name!'],
  [2, 'Wrong type!'],
  [3, 'What is dead may never level up'],
  [4, 'This character is in the team already'],
])(
  ('check method translate(code)'),
  (code, description) => {
    const repository = new ErrorRepository();
    expect(repository.translate(code)).toBe(description);
  },
);

test('check method translate(code), unknown error', () => {
  const repository = new ErrorRepository();
  expect(repository.translate(22)).toBe('Unknown error');
});
