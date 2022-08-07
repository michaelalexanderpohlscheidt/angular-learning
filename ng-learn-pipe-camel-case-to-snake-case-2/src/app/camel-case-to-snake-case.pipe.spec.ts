import { CamelCaseToSnakeCasePipe } from './camel-case-to-snake-case.pipe';

describe('CamelCaseToSnakeCasePipe', () => {
  it('create an instance', () => {
    const pipe = new CamelCaseToSnakeCasePipe();
    expect(pipe).toBeTruthy();
  });
});
