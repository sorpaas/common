[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["bn/max"](_bn_max_.md)

# Module: "bn/max"

## Index

### Functions

* [max](_bn_max_.md#max)

## Functions

###  max

▸ **max**(...`items`: BN[]): *BN*

*Defined in [bn/max.ts:22](https://github.com/polkadot-js/common/blob/f68294c4/packages/util/src/bn/max.ts#L22)*

**`name`** bnMax

**`summary`** Finds and returns the highest value in an array of BNs.

**`example`** 
<BR>

```javascript
import BN from 'bn.js';
import { bnMax } from '@polkadot/util';

bnMax([new BN(1), new BN(3), new BN(2)]).toString(); // => '3'
```

**Parameters:**

Name | Type |
------ | ------ |
`...items` | BN[] |

**Returns:** *BN*
