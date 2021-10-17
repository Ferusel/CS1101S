function n_of_n_stream() {
    function streamer(n, count) {
        return n <= count
            ? pair(n, () => streamer(n+1, 1)) // Reset count
            : pair(n, () => streamer(n, count+1));
    }
    return streamer(1, 1);
}

eval_stream(n_of_n_stream(), 10);

function shorten_stream(s, k) {
    return k === 0 || is_null(s)
            ? null
            : pair(head(s),
                    () => shorten_stream(stream_tail(s), k-1));
}

