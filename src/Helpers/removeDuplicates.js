export const removeDuplicates = arr => {
    return arr.reduce((a,b) => {
        if(a.indexOf(b) === -1) {
            a.push(b);
        }
        return a;
    }, []);
}

export const mapData = (data, val) => {
    return data.map(e => e.type).map(e => e[val]);
}
