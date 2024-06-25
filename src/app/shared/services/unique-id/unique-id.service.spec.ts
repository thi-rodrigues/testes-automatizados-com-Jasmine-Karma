import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {

  let service = null;
  beforeEach(() => { // beforeEach é chamado antes de cata 'it'
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should generate duplicated IDs when called multiple times`, () => {
    const ids = new Set();

    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should return the number of generatedIds when called `, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should throw when called with empty `, () => {
      const emptyValues = [null, undefined, '', '0', '1', 1]; // 'app' para lançar erro
      emptyValues.forEach(emptyValue => {
        expect(() => service.generateUniqueIdWithPrefix(emptyValue))
        .withContext(`Empty value ${emptyValue}`) // withContext usado para saber qual valor ocorreu o erro
        .toThrow();
      });
  });
});
