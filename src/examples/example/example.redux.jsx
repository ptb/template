/* eslint-disable-next-line import/no-unresolved */
import { connect } from "react-redux"

import { actions } from "../../shared/index.js"
import { getApiData } from "../../utilities/index.js"

import { Example as Element } from "./example.view.jsx"

const ExampleSTP = () => {
  const { data } = getApiData ("/api/products")

  return (state) =>
    ({
      "products": data.products,
      "selected": state.selected
    })
}

const ExampleDTP = {
  "fetchSearch": actions.fetchSearch
}

export const example = connect (
  ExampleSTP,
  ExampleDTP
) (Element)
