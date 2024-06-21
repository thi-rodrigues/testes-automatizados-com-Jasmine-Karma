import { UniqueIdsService } from "./unique-id.service";

describe(UniqueIdsService.name, () => {

  let service = null;
  beforeEach(() => { // beforeEach é chamado antes de cata 'it'
    service = new UniqueIdsService()
  });

  it(`#${UniqueIdsService.prototype.generatedUniqueIdWithPrefix.name}
    should generate id when called with prefix`, () => {
    const id = service.generatedUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdsService.prototype.generatedUniqueIdWithPrefix.name}
    should generate duplicated IDs when called multiple times`, () => {
    const ids = new Set();

    for (let i = 0; i < 50; i++) {
      ids.add(service.generatedUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdsService.prototype.generatedUniqueIdWithPrefix.name}
    should return the number of generatedIds when called `, () => {
    service.generatedUniqueIdWithPrefix('app');
    service.generatedUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2)
  });

  it(`#${UniqueIdsService.prototype.generatedUniqueIdWithPrefix.name}
    should throw when called with empty `, () => {
      const emptyValues = [null, undefined, '', '0', '1', 1]; // 'app' para lançar erro
      emptyValues.forEach(emptyValue => {
        expect(() => service.generatedUniqueIdWithPrefix(emptyValue))
        .withContext(`Empty value ${emptyValue}`) // withContext usado para saber qual valor ocorreu o erro
        .toThrow();
      });
  });

});
