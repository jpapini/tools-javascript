export function isObject(value: unknown): value is Record<string, unknown> {
    return !!value && typeof value === 'object' && value.constructor === Object;
}

export function isString(value: unknown): value is string {
    return typeof value === 'string' || value instanceof String;
}

export function isNonEmptyString(value: unknown): value is string {
    return isString(value) && value.trim() !== '';
}
