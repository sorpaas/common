[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["schnorrkel/sign"](_schnorrkel_sign_.md)

# Module: "schnorrkel/sign"

## Index

### Functions

* [schnorrkelSign](_schnorrkel_sign_.md#schnorrkelsign)

## Functions

###  schnorrkelSign

▸ **schnorrkelSign**(`message`: Uint8Array | string, `__namedParameters`: object): *Uint8Array*

*Defined in [schnorrkel/sign.ts:16](https://github.com/polkadot-js/common/blob/0f45b7fb/packages/util-crypto/src/schnorrkel/sign.ts#L16)*

**`name`** schnorrkelSign

**`description`** Returns message signature of `message`, using the supplied pair

**Parameters:**

▪ **message**: *Uint8Array | string*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`publicKey` | undefined &#124; Uint8Array‹› |
`secretKey` | undefined &#124; Uint8Array‹› |

**Returns:** *Uint8Array*
