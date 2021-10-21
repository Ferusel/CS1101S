// return result [[[1, null], null], null]
function permutations(s) {
    return is_null(s)
        ? list(null)
        : accumulate(
                append , 
                null ,
                map(x => // [[[1, null], null], null] Final null is a result of the map()
                    map(p => pair(x, p), // [[1, null], null]
                            permutations(remove(x, s))) , // [null, null]
                    s));
}
permutations(list(1));
undefined;
// append(pair(pair(1, null),null), null);