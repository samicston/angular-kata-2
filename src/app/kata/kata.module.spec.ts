import { KataModule } from './kata.module';

describe('KataModule', () => {
  let kataModule: KataModule;

  beforeEach(() => {
    kataModule = new KataModule();
  });

  it('should create an instance', () => {
    expect(kataModule).toBeTruthy();
  });
});
