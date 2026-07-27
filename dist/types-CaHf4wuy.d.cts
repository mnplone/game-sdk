//#region src/utils/types.d.ts
type MapElement<T> = T extends Map<infer _, infer V> ? V : never;
//#endregion
export { MapElement as t };