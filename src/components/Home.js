import React, { Component } from 'react'
import Profile from './Profile'
import Repos from './Repos'
import '../styles/Home.css'

class Home extends Component {
    render() {
        return (
            //renders the Profile and Repos components
            //in a div for purposes of flexbox later
            <div id="contain">
                <Profile />
                <Repos />
            </div>
        )
    }
}

export default Home