[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [KeyringPair](_types_.keyringpair.md)

# Interface: KeyringPair

## Hierarchy

* **KeyringPair**

## Index

### Properties

* [address](_types_.keyringpair.md#readonly-address)
* [decodePkcs8](_types_.keyringpair.md#decodepkcs8)
* [derive](_types_.keyringpair.md#derive)
* [encodePkcs8](_types_.keyringpair.md#encodepkcs8)
* [isLocked](_types_.keyringpair.md#readonly-islocked)
* [lock](_types_.keyringpair.md#lock)
* [meta](_types_.keyringpair.md#readonly-meta)
* [publicKey](_types_.keyringpair.md#readonly-publickey)
* [setMeta](_types_.keyringpair.md#setmeta)
* [type](_types_.keyringpair.md#readonly-type)

### Methods

* [sign](_types_.keyringpair.md#sign)
* [toJson](_types_.keyringpair.md#tojson)
* [verify](_types_.keyringpair.md#verify)

## Properties

### `Readonly` address

• **address**: *string*

*Defined in [types.ts:38](https://github.com/polkadot-js/common/blob/0f45b7fb/packages/keyring/src/types.ts#L38)*

___

###  decodePkcs8

• **decodePkcs8**: *function*

*Defined in [types.ts:44](https://github.com/polkadot-js/common/blob/0f45b7fb/packages/keyring/src/types.ts#L44)*

#### Type declaration:

▸ (`passphrase?`: undefined | string, `encoded?`: Uint8Array): *void*

**Parameters:**

Name | Type |
------ | ------ |
`passphrase?` | undefined &#124; string |
`encoded?` | Uint8Array |

___

###  derive

• **derive**: *function*

*Defined in [types.ts:45](https://github.com/polkadot-js/common/blob/0f45b7fb/packages/keyring/src/types.ts#L45)*

#### Type declaration:

▸ (`suri`: string, `meta?`: [KeyringPair$Meta](_types_.keyringpair_meta.md)): *[KeyringPair](_types_.keyringpair.md)*

**Parameters:**

Name | Type |
------ | ------ |
`suri` | string |
`meta?` | [KeyringPair$Meta](_types_.keyringpair_meta.md) |

___

###  encodePkcs8

• **encodePkcs8**: *function*

*Defined in [types.ts:46](https://github.com/polkadot-js/common/blob/0f45b7fb/packages/keyring/src/types.ts#L46)*

#### Type declaration:

▸ (`passphrase?`: undefined | string): *Uint8Array*

**Parameters:**

Name | Type |
------ | ------ |
`passphrase?` | undefined &#124; string |

___

### `Readonly` isLocked

• **isLocked**: *boolean*

*Defined in [types.ts:40](https://github.com/polkadot-js/common/blob/0f45b7fb/packages/keyring/src/types.ts#L40)*

___

###  lock

• **lock**: *function*

*Defined in [types.ts:47](https://github.com/polkadot-js/common/blob/0f45b7fb/packages/keyring/src/types.ts#L47)*

#### Type declaration:

▸ (): *void*

___

### `Readonly` meta

• **meta**: *[KeyringPair$Meta](_types_.keyringpair_meta.md)*

*Defined in [types.ts:39](https://github.com/polkadot-js/common/blob/0f45b7fb/packages/keyring/src/types.ts#L39)*

___

### `Readonly` publicKey

• **publicKey**: *Uint8Array*

*Defined in [types.ts:41](https://github.com/polkadot-js/common/blob/0f45b7fb/packages/keyring/src/types.ts#L41)*

___

###  setMeta

• **setMeta**: *function*

*Defined in [types.ts:48](https://github.com/polkadot-js/common/blob/0f45b7fb/packages/keyring/src/types.ts#L48)*

#### Type declaration:

▸ (`meta`: [KeyringPair$Meta](_types_.keyringpair_meta.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`meta` | [KeyringPair$Meta](_types_.keyringpair_meta.md) |

___

### `Readonly` type

• **type**: *KeypairType*

*Defined in [types.ts:42](https://github.com/polkadot-js/common/blob/0f45b7fb/packages/keyring/src/types.ts#L42)*

## Methods

###  sign

▸ **sign**(`message`: Uint8Array, `options?`: [SignOptions](_types_.signoptions.md)): *Uint8Array*

*Defined in [types.ts:49](https://github.com/polkadot-js/common/blob/0f45b7fb/packages/keyring/src/types.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | Uint8Array |
`options?` | [SignOptions](_types_.signoptions.md) |

**Returns:** *Uint8Array*

___

###  toJson

▸ **toJson**(`passphrase?`: undefined | string): *[KeyringPair$Json](_types_.keyringpair_json.md)*

*Defined in [types.ts:50](https://github.com/polkadot-js/common/blob/0f45b7fb/packages/keyring/src/types.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`passphrase?` | undefined &#124; string |

**Returns:** *[KeyringPair$Json](_types_.keyringpair_json.md)*

___

###  verify

▸ **verify**(`message`: Uint8Array, `signature`: Uint8Array): *boolean*

*Defined in [types.ts:51](https://github.com/polkadot-js/common/blob/0f45b7fb/packages/keyring/src/types.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | Uint8Array |
`signature` | Uint8Array |

**Returns:** *boolean*
