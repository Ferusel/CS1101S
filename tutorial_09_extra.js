function count_pairs(x) {
    if (!is_pair(x)) {
        return 0;
    } else {
        return 1 + count_pairs(head(x)) + count_pairs(tail(x));
    }
}

const a = pair(1, 1);
const b = pair(a, a);
const c = pair(b, b);
count_pairs(a);
count_pairs(b);
count_pairs(c);