[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["is/bigInt"](_is_bigint_.md)

# Module: "is/bigInt"

## Index

### Functions

* [isBigInt](_is_bigint_.md#isbigint)

## Functions

###  isBigInt

▸ **isBigInt**(`value`: BigInt | object | string | number | undefined | null): *value is BigInt*

*Defined in [is/bigInt.ts:19](https://github.com/polkadot-js/common/blob/b00d4956/packages/util/src/is/bigInt.ts#L19)*

**`name`** isBigInt

**`summary`** Tests for a `BigInt` object instance.

**`description`** 
Checks to see if the input object is an instance of `BigInt`

**`example`** 
<BR>

```javascript
import { isBigInt } from '@polkadot/util';

console.log('isBigInt', isBigInt(123_456n)); // => true
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | BigInt &#124; object &#124; string &#124; number &#124; undefined &#124; null |

**Returns:** *value is BigInt*
