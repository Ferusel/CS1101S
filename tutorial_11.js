// Scale each element in a given stream by a given factor
function scale_stream(c, stream) {
    return stream_map(x => c * x, stream);
}

// Essentially calculates 2^n where n is the depth of the stream traversed
const A = pair(1, () => scale_stream(2, A)); // Call stream_tail() on A
// const A = pair(1, scale_stream(2, A));
// const A = pair(1, stream_map(x => 2*x, A));
// const A = pair(1, pair(2, () => stream_map(x => 2*x, stream_tail(A))));
// const A = pair(1, pair(2, () => stream_map(x => 2*x, pair(2, () => scale_stream(A))))); // Call stream_tail()
// const A = pair(1, pair(2, stream_map(x => 2*x, pair(2, () => scale_stream(A)))));
// const A = pair(1, pair(2, pair(4, () => stream_map(x => 2*x, stream_tail(A)))));

// function mul_streams(a,b) {
//     return pair(head(a) * head(b),
//                 () => mul_streams(stream_tail(a), stream_tail(b)));
// }

// const integers = integers_from(1);
// const B = pair(1, () => mul_streams(B, integers));