import React, { Component } from 'react'
import { getProfile } from '../actions/profile'
import { connect } from 'react-redux'
import '../styles/Profile.css'

class Profile extends Component {
    componentDidMount() {
        getProfile()
    }

    render(){
        return (
            <div className="profileContainer">
                <ul>
                    <a href={this.props.profile.html_url}><img src={this.props.profile.avatar_url} alt="Kevin Smith" /></a>
                    <li id="bigName">{this.props.profile.name}</li>
                    <li id="userId">{this.props.profile.login}</li>
                    <li id="blog">{this.props.profile.blog}</li>
                    <li id="location">{this.props.profile.location}</li>
                    <li id="email">{this.props.profile.email}</li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        profile: appState.profileReducer.profile
    }
}

export default connect(mapStateToProps)(Profile)