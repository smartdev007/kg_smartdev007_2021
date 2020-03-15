module.exports = {
    checkMap: (s1, s2) => {
        if (s1.length !== s2.length)
            return false;
        
        let map = new Map();

        for(let i = 0; i < s1.length; i++) {
            let s1_char = s1[i];
            let s2_char= s2[i];

            if (map.has(s1_char)) {
                if (map.get(c1_char) !== s2_char) return false;
            } else {
                map.set(s1_char, s2_char);
            }
        }

        return true;
    }
};