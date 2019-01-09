import axios from 'axios'
import store from '../store'

//is localhost (and uses json-server) due to github api request limitations
//ideally would be 'https://api.github.com/users/kscottwordsmith'
axios.defaults.baseURL = 'http://localhost:3001'

export function getProfile() {
    //gets the data out of profile then dispatches 'GET_PROFILE' action
    axios.get('/profile').then(resp => {
        store.dispatch({
            type: 'GET_PROFILE',
            payload: resp.data
        })
    })
}