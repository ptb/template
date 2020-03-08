import { isUndefined } from "lodash"

const dq = "(min-width: 768px)"
const mq = "(max-width: 767px)"

export const mobile = (input, desktop) =>
  (isUndefined (desktop)
    ? {
      [`@media ${mq}`]: input
    }
    : {
      [`@media ${mq}`]: input,
      [`@media ${dq}`]: desktop
    })
