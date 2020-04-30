[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["is/instanceOf"](_is_instanceof_.md)

# Module: "is/instanceOf"

## Index

### Functions

* [isInstanceOf](_is_instanceof_.md#isinstanceof)

## Functions

###  isInstanceOf

▸ **isInstanceOf**(`value`: any, `clazz`: any): *boolean*

*Defined in [is/instanceOf.ts:20](https://github.com/polkadot-js/common/blob/0f45b7fb/packages/util/src/is/instanceOf.ts#L20)*

**`name`** isInstanceOf

**`summary`** Tests for a instance of a class.

**`description`** 
Checks to see if the input value is an instance of the test class.

**`example`** 
<BR>

```javascript
import { isInstanceOf } from '@polkadot/util';

console.log('isInstanceOf', isInstanceOf(new Array(0), Array)); // => true
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`clazz` | any |

**Returns:** *boolean*
