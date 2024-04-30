export const buildQueryKey = (keys: unknown[]) => keys.flatMap((v) => (!v ? [] : v));
