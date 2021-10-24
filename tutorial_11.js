// Increase each element in a given stream by a given factor
function scale_stream(c, stream) {
    return stream_map(x => c * x, stream);
}

const A = pair(1, () => scale_stream(2, A));
function mul_streams(a,b) {
    return pair(head(a) * head(b),
                () => mul_streams(stream_tail(a), stream_tail(b)));
}

const integers = integers_from(1);
const B = pair(1, () => mul_streams(B, integers));