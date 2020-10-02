/*
  This is a demonstration component. It helps to show how you can create new
  menu items and Views in your own BCH web wallet dashboard app.

  This file controls the View (the part on the right side of the dashboard) of
  the component. The menu item is controlled by the menu-components.js file.
*/

import React from 'react'
import { Row, Col, Content, Box, Button } from 'adminlte-2-react'
import { getWalletInfo } from 'gatsby-ipfs-web-wallet/src/components/localWallet'

const BchWallet =
  typeof window !== 'undefined'
    ? window.SlpWallet
    : null

let _this
class DemoComponent extends React.Component {
  constructor (props) {
    super(props)
    _this = this
    this.state = {
      unconfirmedBalance: 0,
      confirmedBalance: 0,
      totalBalance: 0,
      inFetch: false,
      bchWallet: '',
      isChecked: ''

    }
  }

  render () {
    const {
      unconfirmedBalance,
      confirmedBalance,
      totalBalance,
      inFetch,
      isChecked
    } = _this.state
    return (
      <Content
        title='Demo Component'
        subTitle='Check the BCH balance of an address'
        browserTitle='Demo Component'
      >
        <Row>
          <Col xs={12}>
            <Box
              title='BCH Balance'
              type='primary'
              closable
              collapsable
              loaded={!inFetch}
              footer={
                <Button
                  type='primary'
                  text='Check Balance'
                  onClick={_this.handleGetBalance}
                />
              }
            >

              {
                isChecked &&
                  <div>
                    <p>Confirmed: {confirmedBalance}</p>
                    <p>Unconfirmed: {unconfirmedBalance}</p>
                    <p>Total : <strong>{totalBalance}</strong></p>
                  </div>

              }

            </Box>
          </Col>
        </Row>
      </Content>
    )
  }

  componentDidMount () {
    _this.instanceWallet() // Creates a web wallet instance
  }

  // Get wallet balance
  async handleGetBalance () {
    try {
      _this.setState({
        inFetch: true
      })

      const addr = 'bitcoincash:qr69kyzha07dcecrsvjwsj4s6slnlq4r8c30lxnur3'

      const bchWallet = _this.state.bchWallet
      const bchjs = bchWallet.bchjs

      // Get the Balance
      const balances = await bchjs.Electrumx.balance(addr)

      const totalBalance = balances.balance.confirmed + balances.balance.unconfirmed

      _this.setState({
        inFetch: false,
        unconfirmedBalance: balances.balance.unconfirmed,
        confirmedBalance: balances.balance.confirmed,
        totalBalance: totalBalance,
        isChecked: true
      })
    } catch (error) {
      console.error(error)
      _this.setState({
        inFetch: false
      })
    }
  }

  // Creates an instance  of minimal-slp-wallet, with
  // the local storage information if it exists
  instanceWallet () {
    try {
      const localStorageInfo = getWalletInfo()
      if (!localStorageInfo.mnemonic) return null

      const jwtToken = localStorageInfo.JWT
      const restURL = localStorageInfo.selectedServer
      const bchjsOptions = {}

      if (jwtToken) {
        bchjsOptions.apiToken = jwtToken
      }
      if (restURL) {
        bchjsOptions.restURL = restURL
      }
      const bchWalletLib = new BchWallet(localStorageInfo.mnemonic, bchjsOptions)

      // Update bchjs instances  of minimal-slp-wallet libraries
      bchWalletLib.tokens.sendBch.bchjs = new bchWalletLib.BCHJS(bchjsOptions)
      bchWalletLib.tokens.utxos.bchjs = new bchWalletLib.BCHJS(bchjsOptions)

      _this.setState({
        bchWallet: bchWalletLib
      })
      return bchWalletLib
    } catch (error) {
      console.warn(error)
    }
  }
}

export default DemoComponent
