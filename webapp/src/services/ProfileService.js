import React from 'react';

const ProfileService = () => {

    get: function(filters = []) {

        fetch("http://localhost:8000/api/profiles")
        .then(res => res.json())
        .then(
            (result) => {
               return result;
            },
            (error) => {
                console.log(error);
            }
        )
    },

    getLocations: function(filters = []) {
        return [
            { 0 : 'All'},
            { 1 : 'New South Wales'},
            { 2 : 'Victoria'},
            { 3 : 'Northern Territory'},
            { 4 : 'Western Australia'},
            { 5 : 'South Australia'},
            { 6 : 'Australian Capital Territory'},
        ];
    },

    getCategories: function(filters = []) {
        return [
            { 0: 'All'},
            { 1: 'Models'},
            { 2: 'Photographers'},
        ];
    }

}

export default ProfileService;
