import React, { Component } from 'react'
import { Bind } from '../../structures/decorators'
import './User.scss'

interface UserProps {
    avatar_uri: string
    name: string
    is_selected?: boolean
    hoverable?: boolean
}
interface UserState {
    is_hovered: boolean
}

export default class User extends Component<UserProps, UserState> {
    static defaultProps = {
        is_selected: false,
        hoverable: false
    }

    constructor(props: UserProps) {
        super(props)

        this.state = {
            is_hovered: false
        }
    }

    render() {
        return (
            <div className={`user ${this.state.is_hovered ? 'user-hovered':''} ${this.props.is_selected ? 'user-selected' : ''}`}
                onMouseOver={this.hoverAnimation}
                onMouseLeave={this.unhoverAnimation}
            >
                <div className="user-avatar">
                    <img className="user-avatar__img" src={this.props.avatar_uri} alt={`${this.props.name}'s Avatar'`} />
                </div>
                <div className="user-name">
                    <p className="user-name__text">
                        {this.props.name}
                    </p>
                </div>
            </div>
        )
    }

    @Bind()
    hoverAnimation() {
        if (!this.props.hoverable) return
        if (this.props.is_selected) return
        this.setState({
            is_hovered: true
        })
    }

    @Bind()
    unhoverAnimation() {
       if (!this.props.hoverable) return
       this.setState({
           is_hovered: false
       }) 
    }
}
