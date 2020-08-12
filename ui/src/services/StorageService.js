

/**
TTL default is 1 day
 */
const TTL = 24 * 60 * 60 * 1000;

/**
wrapper around browser storage
 */
const StorageService = {

    set: function(key, value) {
        const item = {
            value: value,
            expiry: (new Date()).getTime() + TTL
        }
        localStorage.setItem(key, JSON.stringify(item));
    },

    get: function(key) {
        var item = JSON.parse(localStorage.getItem(key));
        if (item) {
            if ((new Date()).getTime() > item.expiry) {
                localStorage.removeItem(key);
                return null;
            }
            return item.value;
        }
        return null;
    },

    remove: function(key) {
        return localStorage.removeItem(key);
    }
}

export default StorageService;
