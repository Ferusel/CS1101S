
// Q4
// Continuation-passing style
function accumulate_iter(f, init, xs) {
    function acc(ys, cont) {
        return is_null(ys) 
              ? cont(init)
              : acc(tail(ys), x => cont(f(head(ys), x)));
    }
    return acc(xs, x => x);
}



// function accumulate_iter(f, init, xs) {
//     let mem = [];
//     let i = 0;
//     while (!is_null(xs)) {
//         mem[i] = head(xs);
//         xs = tail(xs);
//         i = i+1;
//     }
//     let res = init;
//     for (let j = array_length(mem)-1; j > -1; j = j-1) {
//         res = mem[j] / res;
//     }
//     return res;
// }

accumulate_iter( (x, y) => x / y, 2, list(24, 16, 8) );
// (24/ (16 / (8/ 2)))
// (c =>(b => (a => identity(divide(24, a)))(divide(16, b)))(divide(8, c)))(2)

// Q7
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

// Q9
// const hh1 = pair(undefined, undefined);
// let a = pair(1, 1);
// set_head(hh1, hh1);
// set_tail(hh1, hh1);
// draw_data(hh1);

// Q12
function zip_array(arr1, arr2) {
    let res = [];
    let k = 0;
    for (let i = 0; i < array_length(arr1); i = i+1) {
        res[k] = arr1[i];
        k = k+1;
        res[k] = arr2[i];
        k = k+1;
    }
    return res;
}

// let arr1 = [1,2,3];
// let arr2 = [10,20,30];
// zip_array(arr1, arr2);

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
// scream_ref(fibonacci, 7);
// scream_ref(integers_alt, 3);
// scream_ref(factorials, 4);
// scream_ref(pi_square_series, 4);
// tail(tail(integers_alt)(integers_alt, 100))(integers_alt, 100);