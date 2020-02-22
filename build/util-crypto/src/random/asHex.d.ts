/**
 * @name randomAsHex
 * @summary Creates a hex string filled with random bytes.
 * @description
 * Returns a hex string with the specified (optional) length filled with random bytes.
 * @example
 * <BR>
 *
 * ```javascript
 * import { randomAsHex } from '@polkadot/util-crypto';
 *
 * randomAsHex(); // => 0x...
 * ```
 */
export default function randomAsHex(length?: number): string;
