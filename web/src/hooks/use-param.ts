import { useCallback, useEffect, useState } from "react"

/** Uses the URL search params to store a value in addition to React state. */
export const useParam = <T>(
  key: string,
  convert: (input: string | T) => T,
  defaultValue: T
): [T, (input: T) => void] => {
  /** Get value from URL search param or use `defaultValue`. */
  const getParam = useCallback(
    () =>
      convert(
        new URLSearchParams(window.location.search).get(key) ??
          defaultValue
      ),
    [convert, defaultValue, key]
  )

  const [value, setValue] = useState(getParam)

  /** Set value in URL search param *and* React state. */
  const setParam = useCallback(
    (input: T) => {
      const url = new URL(window.location.href)

      url.searchParams.set(key, String(input))
      window.history.pushState(null, "", url)

      setValue(input)
    },
    [key]
  )

  /** Update React state on browser navigation `popstate` events. */
  useEffect(() => {
    const popParam = () => {
      setValue(getParam())
    }

    window.addEventListener("popstate", popParam)

    return () => {
      window.removeEventListener("popstate", popParam)
    }
  }, [getParam])

  return [value, setParam]
}
