import React from 'react'
import Wallet from 'gatsby-ipfs-web-wallet/src/components/admin-lte/wallet/index'
// import Info from 'gatsby-ipfs-web-wallet/src/components/admin-lte/wallet/info'

// console.log('Wallet: ', Wallet)
// console.log('Info: ', Info)

// let _this

class Wallet2 extends Wallet {
// class Wallet2 extends React.Component {
  constructor (props) {
    super(props)
    console.log('Loading new example view.')

    // _this = this
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
        <p>This is the new component!</p>
      </>
    )
  }
}

export default Wallet2
