module.exports = {
    checkMap: (s1, s2) => {
        if (typeof s1 !== 'string' || s1 === '' || s1 === null) throw `Provide a valid input for string 1`;
        if (typeof s2 !== 'string' || s2 === '' || s2 === null) throw `Provide a valid input for string 2`;

        if (s1.length !== s2.length)
            return false;
        
        let map = new Map();

        for(let i = 0; i < s1.length; i++) {
            let s1_char = s1[i];
            let s2_char= s2[i];

            if (map.has(s1_char)) {
                if (map.get(s1_char) !== s2_char) return false;
            } else {
                map.set(s1_char, s2_char);
            }
        }

        return true;
    }
};
