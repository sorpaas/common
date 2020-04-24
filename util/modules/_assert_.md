[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["assert"](_assert_.md)

# Module: "assert"

## Index

### Functions

* [assert](_assert_.md#assert)

## Functions

###  assert

▸ **assert**(`condition`: boolean | object | string | number | undefined | null, `message`: string | MessageFn): *asserts condition*

*Defined in [assert.ts:25](https://github.com/polkadot-js/common/blob/60a9866a/packages/util/src/assert.ts#L25)*

**`name`** assert

**`summary`** Checks for a valid test, if not Error is thrown.

**`description`** 
Checks that `test` is a truthy value. If value is falsy (`null`, `undefined`, `false`, ...), it throws an Error with the supplied `message`. When `test` passes, `true` is returned.

**`example`** 
<BR>

```javascript
const { assert } from '@polkadot/util';

assert(true, 'True should be true'); // passes
assert(false, 'False should not be true'); // Error thrown
assert(false, () => 'message'); // Error with 'message'
```

**Parameters:**

Name | Type |
------ | ------ |
`condition` | boolean &#124; object &#124; string &#124; number &#124; undefined &#124; null |
`message` | string &#124; MessageFn |

**Returns:** *asserts condition*
