import { SystemUI } from '../SystemUI';

describe('SystemUI', () => {
  it('setNavigationBarColor is defined', async () => {
    expect(SystemUI.setNavigationBarColor).toBeDefined();
  });
  it('setNavigationBarVisibility is defined', async () => {
    expect(SystemUI.setNavigationBarVisibility).toBeDefined();
  });
});
