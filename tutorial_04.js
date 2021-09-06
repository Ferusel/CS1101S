// draw_data(list(list(1, 2, list(3)), list(4, 5), pair(6, 7)));
// draw_data(pair(1, list(2, 3, pair(4, null))));
// draw_data(pair(1, pair(2, list(3, list(4, 5)))));


// function reverse(lst) {
//     return is_null(lst)
//         ? null
//         : pair(reverse(tail(lst)), head(lst));
// }

// draw_data(reverse(list(1, 2, 3, 4)));


// Remember: It is from INSIDE-OUT
// const l = list(7, list(6, 5, 4), 3, list(2, 1));
// head(tail(head(tail(tail(tail(l))))));

// const l = list(list(7), list(6, 5, 4), list(3, 2), 1);
// head(tail(tail(tail(l))));

// const l = list(7, list(6), list(5, list(4)), list(3, list(2, list(1))));
// head(head(tail(head(tail(head(tail(tail(tail(l)))))))));

// const l = list(7, list(list(6, 5), list(4), 3, 2), list(list(1)));
// head(head(head(tail(tail(l)))));

// const l = list(list(0), list(list(1)));
// const l = list(list(0), list(1));
// draw_data(l);