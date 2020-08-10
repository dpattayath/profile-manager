import StorageService from './StorageService';
import {API_ENDPOINT} from '../lib/constants';

const ProfileService = {

    getProfiles: function(filters = {}) {
        let url = `${API_ENDPOINT}profiles?`;
        if (filters.location_id > 0) {
            url += "location_id=" + encodeURIComponent(filters.location_id);
        }
        if (filters.category_id > 0) {
            url += "&category_id=" + encodeURIComponent(filters.category_id);
        }
        return fetch(url);
    },

    deleteProfile: function(id) {
        const url = `${API_ENDPOINT}profiles/` + id;
        const token = StorageService.get('token');
        return fetch(url, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: {}
        });
    },


    getLocations: function(filters = []) {
        return {
            0 : 'All',
            1 : 'New South Wales',
            2 : 'Victoria',
            3 : 'Northern Territory',
            4 : 'Western Australia',
            5 : 'South Australia',
            6 : 'Australian Capital Territory'
        }
    },

    getCategories: function(filters = []) {
        return {
            0: 'All',
            1: 'Models',
            2: 'Actors/Presenters',
            3: 'Photographers/Video',
            4: 'Celebrities',
            5: 'Influencers/Bloggers',
        }
    }

}

export default ProfileService;
