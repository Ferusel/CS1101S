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

// Memoized Streams
// fun is the tail of a stream
function memo_fun(fun) {
    let already_run = false;
    let result = undefined; // I am simply the stream pair(n+1, () => memo_fun(...)), 
    // the result of the next element in the stream

    // fun() is ms(), which will display a message m, and return s, which in this case
    // is the next element of the stream, i.e the result
    function mfun() {
        if (!already_run) {
            result = fun(); // This is ms(), which returns m_integers_from(n+1), 
            // and m_integers_from(n+1) is run and returns pair(n+1, () => ms(...))
            // display("Evaluating result: " + stringify(result));
            already_run = true;
            return result;
        } else {
            // display("Returning called result: " + stringify(result));
            return result;
        }
    }
    return mfun;
}

// Displays a message m, then returns a stream s
function ms(m, s) {
    display(m);
    return s;
}

/* Stream is continued in "m_integers_from(n+1)"
    Memoization occurs in mfun(), where the original stream m_integers is modified with
    each successful m_integers_from(n+1), and a memoized function memo_fun is returned.
    If we need to retrieve the result of an already-processed part of the stream, we will
    call that instance of memo_fun() at that part of the stream, and it will return the result.
    
    So in the mind's eye, let's say we want to get n=3, so:
    pair(n, mfun1()) // Evaluates to
    pair(n, mfun2()) // Evaluates to
    pair(n, mfun3()) // Returns 3
*/
function m_integers_from(n) {
    display(n);
    return pair(n, 
        memo_fun(
            () => ms("M: " + stringify(n), // delay()
                     m_integers_from(n + 1))));
}

const m_integers = m_integers_from(1);

// Returns the nth item of the fibonacci sequence
function fibo_stream(n) {
    return n <= 1
            ? pair(n, () => ms("n: " + stringify(n),
                                fibo_stream()));
}

// stream_ref(m_integers, 0);
// stream_ref(m_integers, 2);
// display("====BREAK====");
// display(m_integers);
// stream_ref(m_integers, 5);

// const ones = pair(1, () => ones);

// const onesA = pair(1, () => ms("A", onesA));

// const onesB = pair(1, memo_fun(() => ms("B", onesB)));

// stream_ref(ones, 3);
// stream_ref(onesA, 3);
// stream_ref(onesB, 3);
// onesB;

