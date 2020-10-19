/*
  This is an example of using Gatsby 'Component Shadowing' to overwrite the
  default Wallet View. It injects the same TX History component at the bottom
  of the Wallet View.
*/

import React from 'react'

import Wallet from 'gatsby-ipfs-web-wallet/src/components/admin-lte/wallet/index'

// import TXHistory from 'gatsby-plugin-bch-tx-history/src/components/txhistory'
import TXHistory from 'gatsby-plugin-bch-tx-history'

class Wallet2 extends Wallet {
  // class Wallet2 extends React.Component {
  constructor (props) {
    super(props)
    console.log('Loading new example view.')

    // console.log('Wallet info: ', props.walletInfo)
  }

  render () {
    return (
      <>
        <Wallet {...this.props} importComponents={this.addCards()} />
      </>
    )
  }

  addCards () {
    return (
      <>
        <TXHistory
          walletInfo={this.props.walletInfo}
          bchWallet={this.props.bchWallet}
        />
      </>
    )
  }
}

export default Wallet2
