/* eslint-disable-next-line import/no-unresolved */
import { connect } from "react-redux"

import { actions } from "../../shared/index.js"
import { getApiData } from "../../utilities/index.js"

import { Header as Element } from "./header.view.jsx"

const HeaderSTP = () => {
  const { data } = getApiData ("/api/products")

  return (state) =>
    ({
      "products": data.products,
      "selected": state.selected
    })
}

const HeaderDTP = {
  "fetchSearch": actions.fetchSearch
}

export const Header = connect (
  HeaderSTP,
  HeaderDTP
) (Element)
