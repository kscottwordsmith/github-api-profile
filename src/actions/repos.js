import axios from 'axios'
import store from '../store'

//is localhost (and uses json-server) due to github api request limitations
//ideally would be 'https://api.github.com/users/kscottwordsmith'
axios.defaults.baseURL = 'http://localhost:3001'

//gets repos then dispatches 'GET_REPOS' action
export function getRepos() {
    axios.get('/repos').then(resp => {
        store.dispatch({
            type: 'GET_REPOS',
            payload: resp.data
        })
    })
}