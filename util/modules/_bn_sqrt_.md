[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["bn/sqrt"](_bn_sqrt_.md)

# Module: "bn/sqrt"

## Index

### Functions

* [sqrt](_bn_sqrt_.md#sqrt)

## Functions

###  sqrt

▸ **sqrt**(`value`: BN): *BN*

*Defined in [bn/sqrt.ts:33](https://github.com/polkadot-js/common/blob/fe9c7a8a/packages/util/src/bn/sqrt.ts#L33)*

**`name`** bnSqrt

**`summary`** Calculates the integer square root of a BN

**`example`** 
<BR>

```javascript
import BN from 'bn.js';
import { bnSqrt } from '@polkadot/util';

bnSqrt(new BN(16)).toString(); // => '4'
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | BN |

**Returns:** *BN*
