function last_pair(xs) {
    return is_null(tail(xs))
            ? xs
            : last_pair(tail(xs));
}

function copy(xs) {
    return map(x => x, xs);
}

function hoopify(xs) {
    let copied = copy(xs);
    let last = last_pair(copied);
    display(last);
    function helper(ys) {
        return last === ys
                ? set_tail(ys, copied)
                : helper(tail(ys));
    }
    helper(copied);
    return copied;
}

function partially_hoopify(xs, m) {
    let copied = copy(xs);
    function helper(ys, x) {
        return x === 0
                ? hoopify(ys)
                : pair(head(ys), 
                        helper(tail(ys), x-1));
    }
    return helper(copied, m);
}

// let a = list(1,2,3,4,5);
// let b = partially_hoopify(a, 2);
// b;

// const hh1 = pair(undefined, undefined);
// let a = pair(1, 1);
// set_head(hh1, hh1);
// draw_data(hh1);
function scream_ref(s, n) {
    function helper(s, i, k) {
        // display(i);
        // display(s);
        return k === 0
                ? head(s)
                : helper(tail(s)(s, i+1), i+1, k-1);
    }
    return helper(s, 0, n);
}
const integers_alt = pair(0, (s, ignore) => pair(head(s) +1, 
                                            tail(integers_alt)));
                                            
const factorials = pair(1, (s, i) => pair(head(s)*i, tail(factorials)));
const pi_square_series = pair(0, (s, i) => pair(head(s) + (6/math_pow(i, 2)),
                                                tail(pi_square_series)));
const fibonacci = pair(0, (s1, ignore) =>
                            pair(1, (s2, ignore) =>
                                pair(head(s1) + head(s2), 
                                    (s3, ignore) => 
                                            pair(head(s3) + head(s2),
                                                (s4, ignore) => pair(head(s3) + head(s4), tail(s3))))));
scream_ref(fibonacci, 7);
// scream_ref(integers_alt, 3);
// scream_ref(factorials, 4);
// scream_ref(pi_square_series, 4);
// tail(tail(integers_alt)(integers_alt, 100))(integers_alt, 100);