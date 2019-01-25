
function detectBox () {
    document.getElementById('aV').onblur = function() {
        return "aV";
    };
    
    document.getElementById('h').onblur = function() {
        return "h";
    };
    
    document.getElementById('k').onblur = function() {
        return "k";
    };
    
    
    document.getElementById('aS').onblur = function() {
        return "aS";
    };
    
    document.getElementById('b').onblur = function() {
        return "b";
    };
    
    document.getElementById('c').onblur = function() {
        return "c";
    };
}

function Del(c) {
    document.getElementById(c).value = "";
}

function Zero(c) {
    document.getElementById(c).value += "0";
}

function One(c) {
    document.getElementById(c).value += "1";
}

function Two(c) {
    document.getElementById(c).value += "2";
}

function Three(c) {
    document.getElementById(c).value += "3";
}

function Four(c) {
    document.getElementById(c).value += "4";
}

function Five(c) {
    document.getElementById(c).value += "5";
}

function Six(c) {
    document.getElementById(c).value += "6";
}

function Seven(c) {
    document.getElementById(c).value += "7";
}

function Eight(c) {
    document.getElementById(c).value += "8";
}

function Nine(c) {
    document.getElementById(c).value += "9";
}

function deci(c) {
    document.getElementById(c).value += ".";
}

function lparen (c) {
    document.getElementById(c).value += "(";
}

function rparen (c) {
    document.getElementById(c).value += ")";
}

