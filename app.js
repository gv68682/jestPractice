const removeSNames = (names) => {
    let result = names;
    names.forEach(element => {
        if(element.toLowerCase().charAt(0) === 's'){
            const index = result.indexOf(element);
            result.splice(index,1);
        }
    });
    return result;
}

module.exports = removeSNames;