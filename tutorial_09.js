// Q1
// function change(x, new_value) {
//     x = new_value;
// }
// let x = 0;
// change(x, 1);
// x;

// Q2
// function d_filter(pred, xs) {
//     if (is_null(xs)) {
//         return null;
//     } else if (pred(head(xs))) {
//         // We keep the head, and filter the rest of the tail
//         set_tail(xs, d_filter(pred, tail(xs)));
//         return xs;
//     } else {
//         // We "chop" off the head of xs, and
//         // wishful-thinking filter the rest of xs
//         return d_filter(pred, tail(xs));
//     }
// }

// const L = list(1, 1, 1, 2, 3);
// d_filter(x => x % 2 === 0, L); // returns [2, [4, [6, [8, null]]]]
// L; // What is L now?

// // Q3
// let a = 10;
// function foo(x) {
//     let b = 0;
//     function goo(x) {
//         let a = 30;
//         if (x <= 2) {
//             a = a + x;
//             b = b + x;
//             // Breakpoint #4
//             undefined;
//         } else {
//             // Breakpoint #3
//             undefined;
//             goo(x - 1);
//         }
//     }
//     a = a + x;
//     b = b + x;
//     // Breakpoint #2
//     undefined;
//     goo(3);
// }
// // Breakpoint #1
// undefined;
// foo(1);
// // Breakpoint #5
// undefined;
// // display(a);
// // display(b);