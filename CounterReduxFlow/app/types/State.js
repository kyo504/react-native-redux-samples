/**
 * @flow
 */
import type { Reducers } from '../reducers';

/**
 * {
 *    counter: (state?: number, action: any) => number
 * }
 */

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;

export type State = $ObjMap<Reducers, $ExtractFunctionReturn>;