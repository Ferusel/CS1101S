// Q6
function tree_to_arraytree(xs) {
    let res = [];
    let i = 0;
    function mapper(x) {
        if (is_number(x)) {
            res[i] = x;
            i = i+1;
        } else {
            res[i] = tree_to_arraytree(x);
            i = i+1;
        }
    }
    map(mapper, xs);
    return res;
}

let tree1 = list(10, 20, 30);
let tree2 = list(tree1, list(30, 20, 10));
// tree_to_arraytree(tree2);

// Q7
function arraytree_to_tree(a) {
    let res = null;
    for (let i = 0; i < array_length(a); i = i+1) {
        if (is_number(a[i])) {
            res = pair(a[i], res);
        } else {
            res = pair(arraytree_to_tree(a[i]), res);
        }
    }
    return reverse(res);
}

let arraytree1 = tree_to_arraytree(tree1);
let arraytree2 = tree_to_arraytree(tree2);
// arraytree_to_tree(arraytree2);

// Q8
function permutations(s) {
    return is_null(s)
            ? list(null)
            : accumulate(append, null,
                        map(x => map(p => pair(x, p), 
                                    permutations(remove(x, s))),
                            s));
}

function array_permutations(a) {
    let xs = arraytree_to_tree(a);
    let perms = permutations(xs);
    return tree_to_arraytree(perms);
}

array_permutations(arraytree1);