// returns true iff n is a prime number.
function is_prime(n) {
    if (n < 2) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        let prime = true;
        for (let d = 2; d * d <= n && prime; d = d + 1) {
            if (n % d === 0) {
                prime = false;
            } else {}
        }
        return prime;
    }
}

function stream_tail(stream) {
    return tail(stream)();
}

function enum_stream(low, hi) {
    return low > hi
        ? null
        : pair(low, () => enum_stream(low + 1, hi));
}

function stream_ref(s, n) {
    return n === 0
        ? head(s)
        : stream_ref(stream_tail(s), n - 1);
}

function stream_map(f, s) {
    return is_null(s)
        ? null
        : pair(f(head(s)),
               () => stream_map(f, stream_tail(s)));
}

function stream_filter(p, s) {
    return is_null(s)
        ? null
        : p(head(s))
            ? pair(head(s),
                   () => stream_filter(p, stream_tail(s)))
            : stream_filter(p, stream_tail(s));
}

function stream_int(n) {
    return pair(n, () => stream_int(n+1));
}

function is_divisible(x, y) {
    return x % y === 0;
}
const integers = integers_from(1); // Stream
const no_fours = stream_filter(x => !is_divisible(x, 4),
                            integers); // Stream

eval_stream(no_fours, 10);
/*
head(tail(filter(
    is_prime,
    enum_list(10000, 1000000)
)));
*/

// head(stream_tail(stream_filter(
//     is_prime,
//     enum_stream(10000, 1000000)
// )));


