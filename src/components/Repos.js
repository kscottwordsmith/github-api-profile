import React, { Component, Fragment } from 'react'
import { getRepos } from '../actions/repos'
import { connect } from 'react-redux'
import '../styles/Repos.css'

class Repos extends Component {
    componentDidMount() {
        getRepos()
    }

    render(){
        return (
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
    return {
        repos: appState.reposReducer.repos
    }
}

export default connect(mapStateToProps)(Repos)