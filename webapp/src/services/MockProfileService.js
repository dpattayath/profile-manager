
const MockProfileService = {

    getProfiles: function (filters = {}) {

        const profiles = [
            {
                first_name: "Adam",
                last_name: "Singer",
                profile_image: "image-0.png",
                location_id: 1,
                category_id: 1,
                followers: "274",
                rating: 5,
                reviews: 10,
            },
            {
                first_name: "Lucy",
                last_name: "Alcorn",
                profile_image: "image-1.png",
                location_id: 1,
                category_id: 1,
                followers: "3K",
                rating: 5,
                reviews: 14,
            },
            {
                first_name: "Matt",
                last_name: "R",
                profile_image: "image-2.png",
                location_id: 1,
                category_id: 2,
                followers: "409",
                rating: 5,
                reviews: 9,
            },
            {
                first_name: "Jaynelle",
                last_name: "Lording",
                profile_image: "image-3.png",
                location_id: 2,
                category_id: 2,
                followers: "9K",
                rating: 5,
                reviews: 5,
            },
            {
                first_name: "Benny",
                last_name: "Russell",
                profile_image: "image-4.png",
                location_id: 1,
                category_id: 1,
                followers: "275",
                rating: 5,
                reviews: 6,
            },
            {
                first_name: "Melinda",
                last_name: "Wenig",
                profile_image: "image-5.png",
                location_id: 1,
                category_id: 2,
                followers: "1K",
                rating: 5,
                reviews: 18,
            },
            {
                first_name: "Charles",
                last_name: "Grant",
                profile_image: "image-6.png",
                location_id: 1,
                category_id: 2,
                followers: "10K",
                rating: 5,
                reviews: 5,
            },
            {
                first_name: "Melanie",
                last_name: "Burnicle",
                profile_image: "image-7.png",
                location_id: 1,
                category_id: 1,
                followers: "15K",
                rating: 5,
                reviews: 18,
            }
        ];
        return profiles.filter(profile => {
            var result = true;
            if (filters.location_id !== 0) {
                result = result && profile.location_id === filters.location_id;
            }
            if (filters.category_id !== 0) {
                result = result && profile.category_id === filters.category_id;
            }
            return result;
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
            2: 'Photographers'
        }
    }
}

export default MockProfileService;
