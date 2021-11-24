// Q1A
function last_member(x, xs) {
    function find_last_member(ys, current_last) {
        let next = member(x, ys);
        if (is_null(next)) {
            return current_last;
        } else {
            return find_last_member(tail(ys), next);
        }
    }
    return find_last_member(xs, null);
}

// last_member(1, list(1,2,1,3,1,2));

// Q1D
function mutable_append(xs, ys) {
    if (is_null(tail(xs))) {
        set_tail(xs, ys);
    } else {
        mutable_append(tail(xs), ys);
        return xs;
    }
}

let xs = list(1,2,3);
let ys = list(4,5,6);
// mutable_append(xs, ys);
// xs;

// Q1E
function transform_tree(t) {
    t = reverse(t);
    return map(subtree => is_list(subtree)
                            ? transform_tree(subtree)
                            : subtree,
                t);
}

let tree1 = list(1,2,3,4);
let tree2 = list(tree1, 5, 6, 7, tree1);
transform_tree(tree2);

function shorten_stream(s, k) {
    return k > 0
            ? pair(head(s),
                    () => shorten_stream(stream_tail(s), k-1))
            : null;
}
function integers_from(n) {
    return pair(n, () => integers_from(n + 1));
}
// let test = shorten_stream(integers_from(1), 10);
// stream_ref(test, 10);

// Q3
function plus_cps(x, y, ret) {
    return ret(x + y);
}

function length_cps(xs, ret) {
    if (is_null(xs)) {
        return ret(0);
    } else {
        return length_cps(tail(xs),
                        tail_result => ret(1 + tail_result));
    }
}

function sum_cps(x, y, z, ret) {
    return plus_cps(x, y, k => plus_cps(z, k, ret));
}

function factorial(n, ret) {
    if (n === 0) {
        return ret(1);
    } else {
        return factorial(n-1, x => ret(n * x));
    }
}

factorial(3, display);

// sum_cps(1,2,3,display);
// length_cps(list(1,2,3), display);
