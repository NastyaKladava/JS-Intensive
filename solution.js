//First task
function makeObjectDeepCopy(obj) {
    let clone = {};

    for (let prop in obj) {
        if(obj[prop] instanceof Object) {
            clone[prop] = makeObjectDeepCopy(obj[prop]);
            continue;
        } else {
            clone[prop] = obj[prop];
        }
    }

    return clone;
}


