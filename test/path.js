var isLongPressedName = function(name, typed) {
    let last = '';
    for (let i = 0; i < name.length; i++) {
        let c = name[i];
        if (!typed.length) {
            return false;
        }
        if (c === typed[0]) {
            typed = typed.slice(1);
        } else {
            if (last && last === typed[0]) {
                typed = typed.slice(1);
                i--;
            } else {
                return false;
            }
        }
        last = c;
    }
    return true;
};

const name = "yyxbtsrs"
const typed = "yyyyxbbtssrs";

isLongPressedName(name, typed);