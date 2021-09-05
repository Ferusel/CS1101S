// // Q2
// // a
// [1, [2, [3, null]]];
// list(1, 2, 3);

// // b
// [1, [2, 3]];
// pair(1, pair(2, 3));

// // c
// [[1, [2, null]], [[3, [4, null]], [[5, [6, null]], null]]];
// pair(pair(1, list(2)),
//     pair(pair(3, list(4)),
//         list(pair(5, list(6)))));
        
// Q3
// const lst = list(7, 6, 5, 4, 3, 2, 1);
// head(tail(tail(tail(lst))));

// const lst = list(list(7), list(6, 5, 4), list(3, 2), 1);
// head(tail(tail(head(tail(lst)))));

// const lst = list(7, list(6, list(5, list(4, list(3, list(2, list(1)))))));
// head(head(tail(head(tail(head(tail(lst)))))));

// const lst = list(7, list(list(list(6, 5, list(list(4)), 3), 2) ), 1);
// head(head(head(tail(tail(head(head(head(tail(lst)))))))));

// draw_data(list(0, 1, 2));
// draw_data(list(0, list(1, 2)));