export function isBoolean(value: unknown): value is boolean {
    return typeof value === 'boolean';
}

export function isNumber(value: unknown): value is number {
    return typeof value === 'number';
}

export function isInteger(value: unknown): value is number {
    return Number.isInteger(value);
}

export function isString(value: unknown): value is string {
    return typeof value === 'string' || value instanceof String;
}

export function isNonEmptyString(value: unknown): value is string {
    return isString(value) && value.trim() !== '';
}

export function isObject(value: unknown): value is Record<string, unknown> {
    return !!value && typeof value === 'object' && value.constructor === Object;
}

export function isArray(value: unknown): value is unknown[] {
    return Array.isArray(value);
}
