import { add } from '../src/indext';
import { decrypt } from '../decrypt_evm_wallet';

describe('testing index file', () => {
  // test('empty string should result in zero', () => {
  //   expect(add('')).toBe(0);
  // });

  test('Decrypt', async () => {
    expect(await decrypt());
  });
});
