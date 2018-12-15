const map = require('./map')

module.exports = {
    toYaong,
    toHyeong,
};

function toYaong(code) {
    return convert(code, map.h2y1, map.h2y2);
}

function toHyeong(code) {
    return convert(code, map.y2h1, map.y2h2);
}

function convert(_code, cmdMap1, cmdMap2) {
    let code = _code;

    for (let i = 0; i < code.length; i++) {
        if (cmdMap1[code[i]]) {
            code = code.slice(0, i) + cmdMap1[code[i]] + code.slice(i + 1);
        }
        if (['…', '⋯','⋮'].includes(code[i])) {
            code = code.slice(0, i) + '...' + code.slice(i + 1);
        }
    }
    
    for (const rule of cmdMap2) {
        const [regex, dest, tilde] = rule;
        const [st, mid, ed] = dest;
    
        let result;
        while ((result = regex.exec(code)) !== null) {
            const [full, midOrigin, dots] = result;
            const { index } = result;
            let newCmd = `${st}${mid.repeat(midOrigin.length)}${ed}`;
            newCmd += (tilde ? '~' : '.').repeat(dots.length);
            code = code.slice(0, index) + newCmd + code.slice(index + full.length);
        }
    }

    return code;
}
