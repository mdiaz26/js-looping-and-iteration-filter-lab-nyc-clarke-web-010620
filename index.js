function findMatching(object, string) {
    return object.filter(function (name) {return name.toLowerCase() === string.toLowerCase();});
}

function fuzzyMatch(object, string) {
    return object.filter(function (name){
        return (name.slice(0,string.length) === string)
    })
}

function matchName(object, string) {
    return object.filter(function (instance){
        return (instance.name === string)
    })
}
