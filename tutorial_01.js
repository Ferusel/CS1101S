// Classic Single Combo 1 5
// Classic Double with Cheese Combo 2 6
// Classic Triple with Cheese Combo 3 7
// Avant-Garde Quadruple with Quacamole Combo 4 8

function biggie_size(combo) {
    return combo + 4;
}

function unbiggie_size(combo) {
    return combo - 4;
}

function is_biggie_size(combo) {
    return (combo > 4);
}

function combo_price(combo) {
    if (is_biggie_size(combo)) {
        return (unbiggie_size(combo) * 1.17) + 0.5;
    } else {
        return combo * 1.17;
    }
}

function empty_order() {
    return 0;
}

function add_to_order(order, combo) {
    return parse_int(stringify(combo) + stringify(order), 10);
}

function last_combo(order) {
    return (order % 10);
}


function other_combos(order) {
    return math_floor(order / 10);
}

const a = 5;
const b = 4;

a === 4
? 6
: b === 4
? 6 + 7 + a
: 25;