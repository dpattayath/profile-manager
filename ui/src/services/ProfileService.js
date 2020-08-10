
const ProfileService = {

    getProfiles: function(filters = {}) {
        let url = "http://localhost:8000/api/profiles?";
        if (filters.location_id > 0) {
            url += "location_id=" + encodeURIComponent(filters.location_id);
        }
        if (filters.category_id > 0) {
            url += "&category_id=" + encodeURIComponent(filters.category_id);
        }
        return fetch(url);
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
