import StorageService from './StorageService';

const AuthService = {

    login: function(email, password) {
        const url = "http://localhost:8000/api/auth/login";
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
        const url = "http://localhost:8000/api/auth/logout";
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
