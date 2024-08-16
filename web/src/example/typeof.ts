const t = {
  Array: "Array",
  Boolean: "Boolean",
  Function: "Function",
  Null: "Null",
  Number: "Number",
  Object: "Object",
  String: "String",
  Symbol: "Symbol",
  Undefined: "Undefined"
} as const

/** Checks if `value` is classified as an `Array`. */
export function isArr(value: unknown): value is unknown[] {
  return isType(value, t.Array)
}

/** Checks if `value` is classified as a `Boolean`. */
export function isBool(value: unknown): value is boolean {
  return isType(value, t.Boolean)
}

/** Checks if `value` is classified as a `Function`. */
/* eslint-disable-next-line @typescript-eslint/no-unsafe-function-type */
export function isFn(value: unknown): value is Function {
  return isType(value, t.Function)
}

/** Checks if `value` is a valid JSON object or string. */
export function isJSON(value: unknown): value is JSON {
  let input = value

  if (!isStr(value)) {
    input = JSON.stringify(value)
  }

  try {
    if (isStr(input)) {
      input = JSON.parse(input)

      return isArr(input) || isObj(input)
    }

    return false
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  } catch (_) {
    return false
  }
}

/** Checks if `value` is `null`. */
export function isNull(value: unknown): value is null {
  return isType(value, t.Null)
}

/** Checks if `value` is classified as a `Number` primitive or object. */
export function isNum(value: unknown): value is number {
  return isType(value, t.Number) && !isNaN(value as number)
}

/** Checks if `value` is the language type of `Object`. */
export function isObj(
  value: unknown
): value is Record<keyof never, unknown> {
  return isType(value, t.Object)
    ? (value as object).constructor === Object &&
        Object.getPrototypeOf(value) === Object.prototype
    : false
}

/** Checks if `value` is classified as a `String` primitive or object. */
export function isStr(value: unknown): value is string {
  return isType(value, t.String)
}

/** Checks if `value` is classified as a `Symbol` primitive or object. */
export function isSym(value: unknown): value is symbol {
  return isType(value, t.Symbol)
}

/** Checks if `value` is of `type`. */
export function isType(
  value: unknown,
  type: (typeof t)[keyof typeof t]
) {
  return Object.prototype.toString.call(value).slice(8, -1) === type
}

/** Checks if `value` is `undefined`. */
export function isUndef(value: unknown): value is undefined {
  return isType(value, t.Undefined)
}
