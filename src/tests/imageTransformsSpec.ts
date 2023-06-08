import { beforeResize } from '../utils/conversion';

describe('Testing image processing', () => {
  it('If the wrong filename is given, a missing input error is thrown.', async () => {
    await expectAsync(beforeResize('brazil', 200, 200)).toBeRejectedWithError(
      Error,
      'Input file is missing'
    );
  });

  it('When given the correct filename, height, and width parameters, it resolves successfully.', async () => {
    await expectAsync(beforeResize('encenadaport', 200, 200)).toBeResolved();
  });
});
