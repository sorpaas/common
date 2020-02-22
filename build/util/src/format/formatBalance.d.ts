import { SiDef, ToBn } from '../types';
import BN from 'bn.js';
interface Defaults {
    decimals: number;
    unit: string;
}
interface Options {
    decimals?: number;
    forceUnit?: string;
    withSi?: boolean;
    withSiFull?: boolean;
    withUnit?: boolean | string;
}
interface BalanceFormatter {
    <ExtToBn extends ToBn>(input?: number | string | BN | ExtToBn, options?: Options, decimals?: number): string;
    calcSi(text: string, decimals?: number): SiDef;
    findSi(type: string): SiDef;
    getDefaults(): Defaults;
    getOptions(decimals?: number): SiDef[];
    setDefaults(defaults: Partial<Defaults>): void;
}
declare const formatBalance: BalanceFormatter;
export default formatBalance;
