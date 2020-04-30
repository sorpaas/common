[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["mnemonic/toSeed"](_mnemonic_toseed_.md)

# Module: "mnemonic/toSeed"

## Index

### Functions

* [toSeed](_mnemonic_toseed_.md#toseed)

## Functions

###  toSeed

▸ **toSeed**(`mnemonic`: string, `password`: string): *Uint8Array*

*Defined in [mnemonic/toSeed.ts:26](https://github.com/polkadot-js/common/blob/0f45b7fb/packages/util-crypto/src/mnemonic/toSeed.ts#L26)*

**`name`** toSeed

**`summary`** Creates a valid seed from a mnemonic input

**`example`** 
<BR>

```javascript
import { mnemonicGenerate, mnemonicToSeed, mnemonicValidate } from '@polkadot/util-crypto';

const mnemonic = mnemonicGenerate(); // => string
const isValidMnemonic = mnemonicValidate(mnemonic); // => boolean

if (isValidMnemonic) {
  console.log(`Seed generated from mnemonic: ${mnemonicToSeed(mnemonic)}`); => u8a
}
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`mnemonic` | string | - |
`password` | string | "" |

**Returns:** *Uint8Array*
