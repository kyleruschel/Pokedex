export const removeDuplicates = arr => {
    return arr.reduce((a, b) => {
        if (a.indexOf(b) === -1) {
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

export const cleanedTypeOne = data => removeDuplicates(mapDataType(data, 0));
export const cleanedWeaknessOne = data => removeDuplicates(mapDataWeakness(data, 0));
export const cleanedWeaknessTwo = data => removeDuplicates(mapDataWeakness(data, 1)).filter(e => e !== undefined);
export const cleanedWeaknessThree = data => removeDuplicates(mapDataWeakness(data, 2)).filter(e => e !== undefined);
export const cleanedWeaknessFour = data => removeDuplicates(mapDataWeakness(data, 3)).filter(e => e !== undefined);
export const cleanedWeaknessFive = data => removeDuplicates(mapDataWeakness(data, 4)).filter(e => e !== undefined);
export const cleanedWeaknessSix = data => removeDuplicates(mapDataWeakness(data, 5)).filter(e => e !== undefined);


export const cleanedTypes = data => removeDuplicates(mapDataType(data, 1)).filter(e => e !== undefined).concat(cleanedTypeOne(data));
export const cleanedWeaknesses = data => removeDuplicates(mapDataWeakness(data, 6))
    .filter(e => e !== undefined)
    .concat(cleanedWeaknessOne(data),
        cleanedWeaknessTwo(data),
        cleanedWeaknessThree(data),
        cleanedWeaknessFour(data),
        cleanedWeaknessFive(data),
        cleanedWeaknessSix(data),
    );