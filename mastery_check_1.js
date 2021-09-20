// // Consider these functions:

// // Number -> Number
// // Doubles a given Number
// function double(x) {
//     return x+x;
// }

// // Number, Number -> Number
// // Returns the average of two Numbers
// function average(x, y) {
//     return (x+y)/2;
// }

// // Normal Order Evaluation
// double(average(2, 4));
// double(average(2, 4) + average(2, 4)); // average() evaluated TWICE, evaluation delayed
// double(((2+4)/2) + average(2, 4));
// double((6/2) + average(2, 4));
// double(3 + average(2, 4));
// // ... Same as above...
// double(3 * 3);
// 6;

// // Applicative Order Evaluation
// double(average(2, 4));
// double((2+4)/2);
// double(6/2);
// double(3); // average() is evaluated ONCE
// 3+3;
// 6;

// We can see double-work done!

// function foldr_sum(lst) {
//     if (is_null(lst)) {
//         return 0;
//     } else {
//         return head(lst) - foldr_sum(tail(lst));
//     }
// }

// function foldl_sum(lst) {
//     if (is_null(lst)) {
//         return 0;
//     } else {
//         return foldl_sum(tail(lst)) - head(lst);
//     }
// }

// const lst = list(0,1,2,3);
// foldr_sum(lst); // 0 - (1 - (2 - (3 - 0))) = -2
// foldl_sum(lst); // (((0 - 3) - 2) - 1) = -6

function factorial_iter(n, rsf) {
    if (n === 0) {
        return rsf;
    } else {
        return factorial_iter(n-1, rsf*n);
    }
}
factorial_iter(3, 1);













