// Q1
function my_map(f, xs) {
    return accumulate((x, y) => pair(f(x), y), null, xs);
}

// my_map(x => x+1, list(1,2,3));

// Q2
function remove_duplicates(lst) {
    return accumulate((current, y) => pair(current, filter(x => x !== current, y)),
                    list(),
                    lst);
}

// remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2));
// remove_duplicates(list("a", "x", "b", "c", "c", "b", "d"));

// Q3
function makeup_amount(x, coins) {
    if (x === 0) {
        return list(null);
    } else if (x < 0 || is_null(coins)) {
        return null;
    } else {
        // Combinations that do not use the head coin.
        const combi_A = makeup_amount(x, tail(coins));

        // Combinations that do not use the head coin 
        // for the remaining amount.
        const combi_B = makeup_amount(x - head(coins), tail(coins));

        // Combinations that use the head coin.
        // Use B to make C: We use the head coin, thus x - head(coins), and append
        // the coin to the list
        const combi_C = map(x=> pair(head(coins), x), combi_B);

        return append(combi_A, combi_C);
    }
}


// makeup_amount(22, list(1, 10, 5, 20, 1, 5, 1, 50));
// Result: list(list(20, 1, 1), list(10, 5, 1, 5, 1), list(1, 20, 1),
//              list(1, 20, 1), list(1, 10, 5, 5, 1), 
//              list(1, 10, 5, 1, 5))
