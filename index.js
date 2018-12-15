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
        if (['…', '⋯','⋮'].includes(code[i])) {
            code = code.slice(0, i) + '...' + code.slice(i + 1);
        }
    }

    for (const rule of cmdMap1) {
        const [regex, dest, symbol] = rule;
        
        let result;
        while ((result = regex.exec(code)) !== null) {
            const [full, dots] = result;
            const { index } = result;
            let newCmd = dest;
            newCmd += symbol.repeat(dots.length);
            code = code.slice(0, index) + newCmd + code.slice(index + full.length);
        }
    }
    
    for (const rule of cmdMap2) {
        const [regex, dest, symbol] = rule;
        const [st, mid, ed] = dest;
    
        let result;
        while ((result = regex.exec(code)) !== null) {
            const [full, midOrigin, dots] = result;
            const { index } = result;
            let newCmd = `${st}${mid.repeat(midOrigin.length)}${ed}`;
            newCmd += symbol.repeat(dots.length);
            code = code.slice(0, index) + newCmd + code.slice(index + full.length);
        }
    }

    return code;
}
