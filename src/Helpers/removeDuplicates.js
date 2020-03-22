export const removeDuplicates = arr => {
    return arr.reduce((a,b) => {
        if(a.indexOf(b) === -1) {
            a.push(b);
        }
        return a;
    }, []);
}

export const mapDataType = (data, val) => {
    return data.map(e => e.type).map(e => e[val]);
}

export const mapDataWeakness = (data, val) => {
    return data.map(e => e.weaknesses).map(e => e[val]);
}
