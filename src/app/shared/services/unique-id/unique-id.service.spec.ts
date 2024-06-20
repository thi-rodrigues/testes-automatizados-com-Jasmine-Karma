import { UniqueIdsService } from "./unique-id.service";

describe(UniqueIdsService.name, () => {

  it(`${UniqueIdsService.prototype.generatedUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const service = new UniqueIdsService();
    const id = service.generatedUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });
});
