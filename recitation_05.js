// function flatten_list(lst) {
//     if (is_null(lst)) {
//         return null;
//     } else if (is_list(head(lst))) {
//         return append(flatten_list(head(lst)),
//                     flatten_list(tail(lst)));
//     } else {
//         return pair(head(lst),
//                     flatten_list(tail(lst)));
//     }
// }

function flatten_list(lst) {
    return accumulate(append, null, lst);
}

const lst_a = flatten_list(list(list(1, 2, 3), list(4, 5, 6), list(7, 8, 9)));
const lst_b = list(list(1, 2, 3), list(4, 5, 6), list(7, 8, 9));
const lst_c = list(1,2,3,4);

function tree_sum(lst) {
    function traverser(lst) {
        return (is_null(lst))
                ? 0
                : head(lst) + traverser(tail(lst));
    }
    
    return traverser(flatten_list(lst));
}

tree_sum(lst_b);

function accumulate_tree(f, combiner, initial, tree) {
    if (is_null(tree)) {
        return initial;
    } else {
        return combiner(f(is_list(head(tree))
                            ? accumulate_tree(f, combiner, initial, tail(tree))
                            : f(head(tree)),
                        accumulate_tree(f, combiner, initial, tail(tree)));
    }
}

function tree_sum_acc(tree) {
    return accumulate_tree( x => x, (x, y) => x + y, 0, tree);
}

tree_sum_acc(lst_c);