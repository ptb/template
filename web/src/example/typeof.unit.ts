import { describe, expect, test } from "vitest"

import {
  isArr,
  isBool,
  isFn,
  isJSON,
  isNull,
  isNum,
  isObj,
  isStr,
  isSym,
  isUndef
} from "./typeof"

describe("isArr", () => {
  test("given undefined arguments", () => {
    expect(isArr(undefined)).toBe(false)
  })

  test("given an array", () => {
    expect(isArr([])).toBe(true)
  })

  test("given a string", () => {
    expect(isArr("")).toBe(false)
  })
})

describe("isBool", () => {
  test("given undefined arguments", () => {
    expect(isBool(undefined)).toBe(false)
  })

  test("given true", () => {
    expect(isBool(true)).toBe(true)
  })

  test("given false", () => {
    expect(isBool(false)).toBe(true)
  })

  test("given a string", () => {
    expect(isBool("")).toBe(false)
  })
})

describe("isFn", () => {
  test("given undefined arguments", () => {
    expect(isFn(undefined)).toBe(false)
  })

  test("given a string", () => {
    expect(isFn("")).toBe(false)
  })

  test("given an function declaration", () => {
    /* eslint-disable-next-line @typescript-eslint/no-empty-function */
    expect(isFn(function () {})).toBe(true)
  })

  test("given an function expression (1)", () => {
    const fn = function func() {
      return true
    }

    expect(isFn(fn)).toBe(true)
  })

  test("given an function expression (2)", () => {
    const fn = function () {
      return true
    }

    expect(isFn(fn)).toBe(true)
  })

  test("given an arrow function (1)", () => {
    /* eslint-disable-next-line @typescript-eslint/no-empty-function */
    expect(isFn(() => {})).toBe(true)
  })

  test("given an arrow function (2)", () => {
    /* eslint-disable-next-line @typescript-eslint/no-empty-function */
    const fn = () => {}

    expect(isFn(fn)).toBe(true)
  })
})

describe("isJSON", () => {
  test("given undefined arguments", () => {
    expect(isJSON(undefined)).toBe(false)
  })

  test("given an array", () => {
    expect(isJSON([])).toBe(true)
  })

  test("given a string quoted array", () => {
    expect(isJSON("[]")).toBe(true)
  })

  test("given an object", () => {
    expect(isJSON({ a: "b" })).toBe(true)
  })

  test("given a string quoted object", () => {
    expect(isJSON('{ "a": "b" }')).toBe(true)
  })

  test("given an invalid string quoted object", () => {
    expect(isJSON('{ "a": }')).toBe(false)
  })
})

describe("isNull", () => {
  test("given undefined arguments", () => {
    expect(isNull(undefined)).toBe(false)
  })

  test("given null", () => {
    expect(isNull(null)).toBe(true)
  })

  test("given a string", () => {
    expect(isNull("")).toBe(false)
  })
})

describe("isNum", () => {
  test("given undefined arguments", () => {
    expect(isNum(undefined)).toBe(false)
  })

  test("given a string", () => {
    expect(isNum("")).toBe(false)
  })

  test("given a positive number", () => {
    expect(isNum(1)).toBe(true)
  })

  test("given a negative number", () => {
    expect(isNum(-1)).toBe(true)
  })

  test("given an NaN", () => {
    expect(isNum(NaN)).toBe(false)
  })
})

describe("isObj", () => {
  test("given undefined arguments", () => {
    expect(isObj(undefined)).toBe(false)
  })

  test("given an object (1)", () => {
    expect(isObj({})).toBe(true)
  })

  test("given an object (2)", () => {
    expect(isObj(new Object())).toBe(true)
  })

  test("given an object (3)", () => {
    expect(isObj(new Map())).toBe(false)
  })

  test("given a string", () => {
    expect(isObj("")).toBe(false)
  })
})

describe("isStr", () => {
  test("given undefined arguments", () => {
    expect(isStr(undefined)).toBe(false)
  })

  test("given a string", () => {
    expect(isStr("")).toBe(true)
  })

  test("given a number", () => {
    expect(isStr(1)).toBe(false)
  })

  test("given a number string", () => {
    expect(isStr("1")).toBe(true)
  })

  test("given an NaN", () => {
    expect(isStr(NaN)).toBe(false)
  })
})

describe("isSym", () => {
  test("given undefined arguments", () => {
    expect(isSym(undefined)).toBe(false)
  })

  test("given a string", () => {
    expect(isSym("")).toBe(false)
  })

  test("given an empty symbol", () => {
    const sym = Symbol()

    expect(isSym(sym)).toBe(true)
  })

  test("given an symbol with label", () => {
    const sym = Symbol("sym")

    expect(isSym(sym)).toBe(true)
  })
})

describe("isUndef", () => {
  test("given a defined object", () => {
    expect(isUndef("")).toBe(false)
  })

  test("given an undefined object", () => {
    expect(isUndef(undefined)).toBe(true)
  })
})
