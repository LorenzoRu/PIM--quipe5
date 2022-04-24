import React, { Component } from 'react'
import Usermodal from '../modaluser/userModal'

export default class Profile extends Component {

    state ={
        display: false
    }

    show = () => {
        this.setState({
            display: true
        })
    }

    hide = () => {
        this.setState({
            display: false
        })
    }

  render() {
    return (
      <div>
          <img src="/img/profil.svg" alt="profil" className="profil" onClick={this.show} />
          <Usermodal
            display={this.state.display}
            hide={this.hide}
          />
      </div>
    )
  }
}
