function fixRawBuzzLink(dirtyLink) {
    let cleanLink = dirtyLink.replace(/"/g, "'");
    return cleanLink;
}

export default fixRawBuzzLink;