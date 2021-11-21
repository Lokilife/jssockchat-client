import React, { Component } from 'react'
import './App.scss'

import Messenger from './components/Messenger/Messenger'
import UsersTab from './components/UsersTab/UsersTab'

interface AppState {
  username: string,
  selectedUser: number
}

export default class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props)
     
    this.state = {
      username: `Loki Test ${Math.floor(1 + Math.random() * 100)}`,
      selectedUser: 0
    }
  }

  render() {
    const setSelectedUser = (index: number) => 
      this.setState({
        selectedUser: index
      })
    
    return (
      <div className="app">
        {/* Chat Page */}
        <div className="content">
          <div className="users-tab-block">
            <UsersTab users={
              [
                {
                  name: "Loki Test",
                  avatar_uri: "https://cdn.discordapp.com/avatars/590941225096314880/c658e290127cf9e7cbdc596224e275b5.png",
                },
                {
                  name: "Loki Test 2",
                  avatar_uri: "https://cdn.discordapp.com/avatars/590941225096314880/c658e290127cf9e7cbdc596224e275b5.png",
                }
              ]
            }
              setSelectedUser={setSelectedUser}
              selectedUser={this.state.selectedUser}
            />
          </div>
          <div className="messenger-block">
            <Messenger />
          </div>
        </div>
      </div>
    )
  }
}
