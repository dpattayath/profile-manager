const convertToThousands = (data) => {
    let followers = parseInt(data);
    if (followers >= 1000) {
        return Math.ceil(followers / 1000) + "K";
    }
    return followers;
}

export {convertToThousands};
