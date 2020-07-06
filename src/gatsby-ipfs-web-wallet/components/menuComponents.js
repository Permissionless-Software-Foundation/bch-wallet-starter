import React from "react"
import { Sidebar } from "adminlte-2-react"

const { Item } = Sidebar

const MenuComponents = [
  {
    key: "New Component",
    component: <div>Test!</div>,
    menuItem: <Item icon="fas-cog" key="New Component" text="New Component" />,
  },
]

export default MenuComponents
