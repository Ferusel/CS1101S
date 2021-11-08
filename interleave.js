// Type your program in here!

function to_list(n) {
    if (n === 0) {
        return list(0);
    }
    
    function helper(x) {
        return x === 0
            ? null
            : pair(x%10, helper(math_floor(x/10)));
    }
    return reverse(helper(n));
}

function to_number(xs) {
    function helper(xs, n) {
        return is_null(xs)
                ? 0
                : head(xs) * math_pow(10, n) + helper(tail(xs), n+1);
    }
    
    return helper(reverse(xs), 0);
}

function interleave(n1, n2) {
    function interleaver(xs, ys) {
        return is_null(xs)
                ? ys
                : is_null(ys)
                ? xs
                : pair(head(xs), interleaver(ys, tail(xs)));
    }
    
    return to_number(interleaver(to_list(n1), to_list(n2)));
}

interleave(125, 43);
// to_number(list(1,2));
// to_list(43);