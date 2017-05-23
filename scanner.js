var os = require('os');

function isIgnoredChar(char) {
    return char === ' ' || char === os.EOL
}

function getNextToken() {
    return tokens[current_token++]
}

function parseInputForToken(input, cursor) {
    let s = -1, e = -1
    let token

    while (input[cursor] && isIgnoredChar(input[cursor])) {
        cursor++
    }
    s = cursor

    while (input[cursor] && !isIgnoredChar(input[cursor])) {
        cursor++
    }
    e = cursor

    if(s >= 0 && e > 0) token = input.substring(s, e)

    return {
        cursor: cursor,
        token: token
    }
}

var current_token = 0
var tokens = []

function initScanner(input, cursor = 0) {
    let token = ''
    tokens = []
    current_token = 0
    while(cursor < input.length && token !== undefined) {
        let result = parseInputForToken(input, cursor)
        token = result.token
        cursor = result.cursor

        if(token) tokens.push(token)
    }
}

function baseNext(callback) {
    if(tokens.length === 0) return undefined
            let token = getNextToken()
            return callback(token?token:undefined)
}

module.exports = (input, cursor = 0) => {
    initScanner(input, cursor)
    return {
        nextInt: function () {
            return baseNext(parseInt)
        },
        hasNext: function() {
            return current_token <= tokens.length - 1
        },
        nextString: function () {
            return baseNext(String)
        },
        nextFloat: function () {
            return baseNext(parseFloat)
        },
        next: function() {
            let possible_items = {
                'i': this.nextInt,
                's': this.nextString,
                'f': this.nextFloat
            }
            let result = []
            var args = Array.prototype.slice.call(arguments);
            for (var i = 0; i < args.length; i++) {
                if(this.hasNext()) result.push(possible_items[arguments[i]]())
            }
            return result
        }
    };
};