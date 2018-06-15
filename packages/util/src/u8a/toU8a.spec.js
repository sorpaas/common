// Copyright 2017-2018 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const { u8aToU8a } = require('./index');

describe('u8aToU8a', () => {
  it('returns an empty Uint8Array when null provided', () => {
    expect(
      u8aToU8a(null)
    ).toHaveLength(0);
  });

  it('returns a Uint8Array (hex input)', () => {
    expect(
      u8aToU8a('0x80000a')
    ).toEqual(
      new Uint8Array([128, 0, 10])
    );
  });

  it('returns Uint8Array (string input)', () => {
    expect(
      u8aToU8a('abcde fghij')
    ).toEqual(new Uint8Array([97, 98, 99, 100, 101, 32, 102, 103, 104, 105, 106]));
  });

  it('returns a Uint8Array (buffer input)', () => {
    expect(
      u8aToU8a(Buffer.from('80000a', 'hex'))
    ).toEqual(
      new Uint8Array([128, 0, 10])
    );
  });

  it('returns a Uint8Array as-is (u8a input)', () => {
    expect(
      u8aToU8a(new Uint8Array([128, 0, 10]))
    ).toEqual(
      new Uint8Array([128, 0, 10])
    );
  });
});
