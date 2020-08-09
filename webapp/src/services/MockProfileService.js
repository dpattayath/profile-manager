
const MockProfileService = {
    /** */
    all: function (filters = []) {
        return [
            {
                first_name: "Adam",
                last_name: "Singer",
                profile_image: "image-0.png",
                location: "New South Wales",
                followers: "274",
                rating: 5,
                reviews: 10,
            },
            {
                first_name: "Lucy",
                last_name: "Alcorn",
                profile_image: "image-1.png",
                location: "New South Wales",
                followers: "3K",
                rating: 5,
                reviews: 14,
            },
            {
                first_name: "Matt",
                last_name: "R",
                profile_image: "image-2.png",
                location: "New South Wales",
                followers: "409",
                rating: 5,
                reviews: 9,
            },
            {
                first_name: "Jaynelle",
                last_name: "Lording",
                profile_image: "image-3.png",
                location: "Victoria",
                followers: "9K",
                rating: 5,
                reviews: 5,
            },
            {
                first_name: "Benny",
                last_name: "Russell",
                profile_image: "image-4.png",
                location: "New South Wales",
                followers: "275",
                rating: 5,
                reviews: 6,
            },
            {
                first_name: "Melinda",
                last_name: "Wenig",
                profile_image: "image-5.png",
                location: "New South Wales",
                followers: "1K",
                rating: 5,
                reviews: 18,
            },
            {
                first_name: "Charles",
                last_name: "Grant",
                profile_image: "image-6.png",
                location: "New South Wales",
                followers: "10K",
                rating: 5,
                reviews: 5,
            },
            {
                first_name: "Melanie",
                last_name: "Burnicle",
                profile_image: "image-7.png",
                location: "New South Wales",
                followers: "15K",
                rating: 5,
                reviews: 18,
            }
        ];
    }
}

export default MockProfileService;
