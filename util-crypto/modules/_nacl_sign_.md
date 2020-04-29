[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["nacl/sign"](_nacl_sign_.md)

# Module: "nacl/sign"

## Index

### Functions

* [naclSign](_nacl_sign_.md#naclsign)

## Functions

###  naclSign

▸ **naclSign**(`message`: Uint8Array | string, `__namedParameters`: object): *Uint8Array*

*Defined in [nacl/sign.ts:25](https://github.com/polkadot-js/common/blob/b00d4956/packages/util-crypto/src/nacl/sign.ts#L25)*

**`name`** naclSign

**`summary`** Signs a message using the supplied secretKey

**`description`** 
Returns message signature of `message`, using the `secretKey`.

**`example`** 
<BR>

```javascript
import { naclSign } from '@polkadot/util-crypto';

naclSign([...], [...]); // => [...]
```

**Parameters:**

▪ **message**: *Uint8Array | string*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`publicKey` | undefined &#124; Uint8Array‹› |
`secretKey` | undefined &#124; Uint8Array‹› |

**Returns:** *Uint8Array*
