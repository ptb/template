import { isUndefined } from "lodash"

const dppx = "(WebkitMinDevicePixelRatio: 2)"

export const retina = (input, normal) =>
  (isUndefined (normal)
    ? {
      [`@media ${dppx}`]: input
    }
    : {
      [`@media ${dppx}`]: input,
      [`@media not ${dppx}`]: normal
    })
