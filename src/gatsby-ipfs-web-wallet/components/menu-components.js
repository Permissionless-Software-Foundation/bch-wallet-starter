/*
  This file is how you add new menu items to your site. It uses the Gatsby
  concept of Component Shadowing:
  https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/

  It over-rides he default file in the gatsby-ipfs-web-wallet Theme.
*/

import React from 'react'
import { Sidebar } from 'adminlte-2-react'

const { Item } = Sidebar

const MenuComponents = [
  {
    key: 'New Component',
    component: <div>Test!</div>,
    menuItem: <Item icon='fas-cog' key='New Component' text='New Component' />
  }
]

export default MenuComponents
