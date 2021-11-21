import React, { Component } from 'react'
import User from '../User/User'
import './UsersTab.scss'

interface UsersTabProps {
    users: Array<{avatar_uri: string, name: string, id?: number}>
    setSelectedUser: (index: number) => void
    selectedUser: number
}

export default class UsersTab extends Component<UsersTabProps> {
    constructor(props: UsersTabProps) {
        props.users.map((user, index) => {
            return {
                ...user,
                id: index
            }
        })
        super(props)
    }
    
    render() {
        return (
            <div className="usersTab">
                <span className="usersTab-title">Current online users:</span>
                <ul className="usersTab-list">
                    {
                        this.props.users.map((user, index) => 
                            <li key={index} className="usersTab-list__user" onClick={this.props.setSelectedUser.bind(null, index)}>
                                <User avatar_uri={user.avatar_uri} name={user.name} is_selected={this.props.selectedUser === index ? true : false} hoverable={true}/>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
