import React, { Component } from 'react'
import './Message.scss'
import strftime from 'strftime'

interface MessageProps {
    isMyMessage: boolean
    content: string
    date: Date
}

export default class Message extends Component<MessageProps> {
    render() {
        return (
            <div className={`message ${this.props.isMyMessage ? 'myMessage' : ''}`}>
                <span className="message-content">
                    {this.props.content}
                </span>
                <span className="message-date">
                    {
                        new Date().valueOf() - this.props.date.valueOf() > 86400000
                        ? strftime('%d.%m.%y', this.props.date)
                        : strftime('%l:%M %p')
                    }
                </span>
            </div>
        )
    }
}
