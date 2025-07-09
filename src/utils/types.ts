export type SetElement<T> = T extends Set<infer V> ? V : never;
export type MapElement<T> = T extends Map<infer _, infer V> ? V : never;
