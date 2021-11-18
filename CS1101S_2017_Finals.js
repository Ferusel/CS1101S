// Q4
function closest_two_power(x) {
    return math_pow(2, math_floor(math_log2(x)));
}

// function min_tiles(L, W) {
//     if (L === 0 || W === 0) {
//         return 0;
//     } else if (L === 1 && W === 1) {
//         return 1;
//     } else {
//         const min_dim = (L <= W) ? L : W;
//         const two_pow = closest_two_power(min_dim);
//         return 1 + min_tiles(L - two_pow, W)
//                     + min_tiles(two_pow, W - two_pow);
//     }
// }

function min_tiles(L, W) {
    if (L === 0 || W === 0) {
        return 0;
    } else if (L === 1 && W === 1) {
        return 1;
    } else {
        let x = closest_two_power(math_min(L, W));
        if ((L-x>=0) && (W-x>=0)) {
            return 1 + min_tiles(L-x, x) + min_tiles(L, W-x);
        } else if (L===1) {
            return 1 + min_tiles(L, W-1);
        } else if (W===1) {
            return 1 + min_tiles(L-1, W);
        }
    }
}

// min_tiles(6, 7);

// Q5B
// function bubblesort_list(L) {
//     const len = length(L);
//     for (let i = len - 1; i >= 1; i = i - 1) {
//         let p = L;
//         for (let j = 0; j < i; j = j + 1) {
//             if (head(p) > head(tail(p))) {
//                 const temp = head(p);
//                 set_head(p, head(tail(p)));
//                 set_head(tail(p), temp);
//             } else { }
//             p = tail(p);
//         }
//     }
// }

function bubblesort_list(L) {
    const len = length(L);
    for (let i = len - 1; i >= 1; i = i - 1) {
        let p = L;
        for (let j = 0; j < i; j = j + 1) {
            if (list_ref(L, j) > list_ref(L, j+1)) {
                const a = list_ref(L, j);
                const b = list_ref(L, j+1);
                function setter(xs, n, x) {
                    if (n === 0) {
                        let tmp = head(xs);
                        set_head(xs, x);
                    } else {
                        return setter(tail(xs), n-1, x);
                    }
                }
                setter(xs, j, b);
                setter(xs, j+1, a);
            }
        }
    }
}

let xs = list(3,5,2,4,1);
bubblesort_list(xs);
xs;