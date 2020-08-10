import StorageService from './StorageService';
import {API_ENDPOINT} from '../lib/constants';

const AuthService = {

    login: function(email, password) {
        const url = `${API_ENDPOINT}auth/login`;
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                'email': email,
                'password': password
            })
        });
    },

    logout: function(token) {
        const url = `${API_ENDPOINT}auth/logout`;
        return fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: {}
        });
    },

    isLoggedIn: function() {
        const token = StorageService.get('token');
        if (token) {
            return true;
        }
        return false;
    }
}

export default AuthService;
