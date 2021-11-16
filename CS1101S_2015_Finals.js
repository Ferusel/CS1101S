let input = list(1, pair(2,3), list(4));
let result = map(x => x, input);
// list_ref(input, 0) === list_ref(result, 0);

function mutable_reverse(xs) {
    let tail_pointer = null;
    function helper(ys, pointer) {
        if (is_null(tail(ys))) {
            tail_pointer = ys;
            set_tail(ys, pointer);
        } else {
            helper(tail(ys), ys);
            set_tail(ys, pointer);
        }
    }
    helper(xs, null);
    return tail_pointer;
}

let as = list(1,2,3,4,5);
let bs = mutable_reverse(as);
// bs;
// as;

function tree_to_tream(tree) {
    if (is_null(tree)) {
        return tree;
    } else if (is_list(head(tree))) {
        return pair(tree_to_tream(head(tree)),
                    () => tree_to_tream(tail(tree)));
    } else {
        return pair(head(tree),
                    () => tree_to_tream(tail(tree)));
    }
}

let tree1 = list(1,2,3,4);
let tree2 = list(1,2, list(3,4), 5,6);

let tream1 = tree_to_tream(tree1);
let tream2 = tree_to_tream(tree2);
// stream_to_list(tream2);
// stream_to_list(stream_ref(tream2, 2));

function tream_map(f, t) {
    if (is_null(t)) {
        return null;
    } else if (is_pair(head(t))) {
        return pair(tream_map(f, head(t)),
                    () => tream_map(f, stream_tail(t)));
    } else {
        return pair(f(head(t)),
                    () => tream_map(f, stream_tail(t)));
    }
}
// stream_to_list(tream1);
// let tream3 = tream_map(x => x*2, tream1);
let tream4 = tream_map(x => x*2, tream2);

stream_to_list(tream4);
