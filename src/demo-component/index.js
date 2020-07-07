/*
  This is a demonstration component. It helps to show how you can create new
  menu items and Views in your own BCH web wallet dashboard app.

  This file controls the View (the part on the right side of the dashboard) of
  the component. The menu item is controlled by the menu-components.js file.
*/

import React from 'react'
import { Row, Col, Content, Box, Button } from 'adminlte-2-react'

class DemoComponent extends React.Component {
  render () {
    return (
      <Content
        title='Demo Component'
        subTitle='Getting started with adminlte-2-react'
        browserTitle='Demo Component'
      >
        <Row>
          <Col xs={12}>
            <Box
              title='A Box'
              type='primary'
              closable
              collapsable
              footer={<Button type='danger' text='Danger Button' />}
            >
              This is the View portion of the Demo Component. This view is
              controlled by the src/demo-component/index.js file.
            </Box>
          </Col>
        </Row>
      </Content>
    )
  }
}

export default DemoComponent
