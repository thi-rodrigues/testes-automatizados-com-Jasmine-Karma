import { UniqueIdsService } from "./unique-id.service";

describe('UniqueIdsService', () => {

  it('#generatedUniqueIdWithPrefix should generate id when called with prefix', () => {
    const service = new UniqueIdsService();
    const id = service.generatedUniqueIdWithPrefix('app');
    expect(id).toContain('app-');
  });
});
