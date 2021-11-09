/**
 * Run-length compression encoding (similar concept came up in 20/21)
 **/
 
// Q1 - convert list to run length encoding
/**
 * I have a list of characters eg: list('a', 'b', 'c', 'c', 'd').
 * For some reason, my list of characters has many sequences of the same
 * character. I realised that such a representation is pretty inefficient,
 * so I want to compress it. The compression is simple:
 * 
 *      Sequences of the same letter occuring in the list consecutively 
 *      should be compressed to a pair (<letter>, n)
 *      Eg: list('a', 'a', 'a', 'b', 'b', 'c') will be compressed to
 *          list(pair('a', 3), pair('b', 2), pair('c', 1))
 * 
 * Write a function to compress a list of letters via this run-length
 * compression method. 
 * 
 * You can assume that lists will only contain letters and will have 
 * at least one element. 
 * 
 * Your function should not mutate the original list.
 **/
 
function run_length_compress(lst) {
    function helper(lst, rsf) {
        return is_null(lst)
                ? list(rsf)
                : head(lst) !== head(rsf)
                ? pair(rsf, helper(tail(lst), pair(head(lst), 1)))
                : helper(tail(lst), pair(head(rsf), tail(rsf) + 1));
    }
    
    return helper(tail(lst), pair(head(lst), 1));
}

// 1. should display list(["a", 3], ["b", 2], ["c", 1], ["b", 1])
display_list(run_length_compress(list('a', 'a', 'a', 'b', 'b', 'c', 'b')));

// 2. should display list(["a", 5])
display_list(run_length_compress(list('a', 'a', 'a', 'a', 'a')));

// 3. should display list(["a", 1], ["b", 1], ["c", 1], ["d", 1], ["e", 1])
display_list(run_length_compress(list('a', 'b', 'c', 'd', 'e')));


// Q2 - decode a run length encoding
/**
 * Given a run-length encoding, decode the original list.
 * So list(pair('a', 3), pair('b', 2), pair('c', 1)) will give
 *      list('a', 'a', 'a', 'b', 'b', 'c')
 * 
 * You can assume that the input will be a non-empty list of pairs
 * where first element of pair is a letter and second element is a number.
 * 
 * Don't mutate the original list. 
 * 
 * Feel free to add your own test-cases.
 **/

function unpack(p) {
    return build_list(n => head(p), tail(p));
}
    
function run_length_decode(lst) {
    return is_null(lst)
            ? null
            : append(unpack(head(lst)), run_length_decode(tail(lst)));
}

// display(unpack(pair('a', 5)));

// 1. should display list("a", "a", "a", "a", "a", "b", "a", "a", "a")
display_list(run_length_decode(list(pair('a', 5), pair('b', 1), pair('a', 3))));

// 2. should display list("b", "b", "b", "b")
display_list(run_length_decode(list(pair('b', 4))));