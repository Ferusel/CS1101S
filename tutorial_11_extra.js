function stream_pairs(s) {
    return is_null(s)
    ? null
    : stream_append(
        stream_map(
            sn => pair(head(s), sn),
            stream_tail(s)),
        stream_pairs(stream_tail(s)));
}

const ints = pair(1, () => pair(2, () => pair(3, () => pair(4, () => pair(5, () => null)))));
// a
display(eval_stream(stream_pairs(ints), 10));

// b
// stream_pairs(s) takes in a stream, and generates a list of pairs with each element paired to
// every other element in the stream

// c
const integers = integers_from(1);
// const int_infinite = stream_pairs(integers);
// display(eval_stream(int_infinite));

// d
// function stream_append(xs, ys) {
//     return is_null(xs)
//         ? ys
//         : pair(head(xs),
//                 () => stream_append(stream_tail(xs),
//                                     ys));
// }

// function stream_pairs(s) {
//     return is_null(s)
//     ? null
//     : stream_append(
//         stream_map(
//             sn => pair(head(s), sn),
//             stream_tail(s)),
//         stream_pairs(stream_tail(s)));
// }

function stream_append_pickle(xs, ys) {
    return is_null(xs)
        ? ys()
        : pair(head(xs),
            () => stream_append_pickle(stream_tail(xs),
                                        ys));
}
function stream_pairs2(s) {
    return is_null(s)
        ? null
        : stream_append_pickle(
                        stream_map(
                            sn => pair(head(s), sn),
                            stream_tail(s)),
                        () => stream_pairs2(stream_tail(s)));
}
const s2 = stream_pairs2(integers);
display(s2);

/*
In stream_pairs2, ys is now a nullary function which is only executed once xs is null
i.e when the end of xs is reached.

However, since xs is an infinite stream, ys will never be executed.

However, if xs happens to be a finite stream, then when the end of xs is reached, ys is executed
in the form of ys(), which calls the nullary function, and thus begins evaluation of ys
*/

// e

// Q2
function mul_series(s1, s2) {
    return pair(e1(s1, s2),
                () => add_series(e2(s1, s2), e3(s1, s2)));
}

function e1() {
    
}

function e2() {}

function e3() {}
