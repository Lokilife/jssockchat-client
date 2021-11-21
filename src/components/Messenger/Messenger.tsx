import React, { Component } from 'react'
import Message from '../Message/Message'
import User from '../User/User'
import './Messenger.scss'

export default class Messenger extends Component {
    render() {
        return (
            <div className="messenger">
                <div className="messenger-header">
                    <User avatar_uri="https://cdn.discordapp.com/avatars/590941225096314880/c658e290127cf9e7cbdc596224e275b5.png" name="Loki Test"/>
                </div>
                <div className="messenger-content">
                    <div className="messenger-messages">
                        <ul className="messenger-messages__list">
                            <li className="messenger-messages__list__item">
                                <Message isMyMessage={false} content="Hello, World!" date={new Date()}/>
                            </li>
                            <li className="messenger-messages__list__item" style={{float: "right"}}>
                                <Message isMyMessage={true} content="Локи, довёрстовывай уже и занимайся серваком!" date={new Date()}/>
                            </li>
                        </ul>
                    </div>
                    <div className="messenger-input">
                        <input className="messenger-input__field" type="text" placeholder="Введите сообщение" />
                    </div>
                </div>
            </div>
        )
    }
}
