import React, { Component, Fragment } from 'react'
import { getRepos } from '../actions/repos'
import { connect } from 'react-redux'
import '../styles/Repos.css'

class Repos extends Component {
    componentDidMount() {
        //gets the Repos on mounting
        getRepos()
    }

    render(){
        return (
            //maps through repos once they are set to the store
            //renders the name of the repo with a link to the page and which language the repo is in
            <div className="reposContainer">
                <ul>
                    {this.props.repos.map((repo, i) => (
                        <Fragment key={`repFrag${i}`}>
                            <li key={`repo${i}`}><a href={repo.html_url}>{repo.name}</a></li>
                            <li key={`lang${i}`} className="lang">{repo.language}</li>
                        </Fragment>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    //when repos is changed in the store, appState updates, so this updates Repos
    return {
        repos: appState.reposReducer.repos
    }
}

//connect mapStateToProps to Repos, functioning similarly to a subscription
export default connect(mapStateToProps)(Repos)