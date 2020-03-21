[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["is/bn"](_is_bn_.md)

# Module: "is/bn"

## Index

### Functions

* [isBn](_is_bn_.md#isbn)

## Functions

###  isBn

▸ **isBn**(`value`: object | string | number | undefined | null): *value is BN*

*Defined in [is/bn.ts:22](https://github.com/polkadot-js/common/blob/27c474bd/packages/util/src/is/bn.ts#L22)*

**`name`** isBn

**`summary`** Tests for a `BN` object instance.

**`description`** 
Checks to see if the input object is an instance of `BN` (bn.js).

**`example`** 
<BR>

```javascript
import BN from 'bn.js';
import { isBn } from '@polkadot/util';

console.log('isBn', isBn(new BN(1))); // => true
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | object &#124; string &#124; number &#124; undefined &#124; null |

**Returns:** *value is BN*
