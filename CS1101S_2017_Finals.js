// Q1B 
function similar(lst1, lst2) {
    function helper(lst1, lst2, flag) {
        if (is_null(lst1) && is_null(lst2)) {
            return true;
        } else if (head(lst1) !== head(lst2)) {
            if (flag) {
                return false;
            } else {
                return helper(lst1, lst2, false);
            }
        } else if (is_list(head(lst1))){
            return helper(head(lst1), head(lst2), flag) && helper(tail(lst1), tail(lst2), flag);
        } else {
            return helper(tail(lst1), tail(lst2), flag);
        }
    }
    return helper(lst1, lst2, true);
}

let lst1 = list(4, list(5, 6));
let lst2 = list(4, null, list(5, 6));
let lst3 = list(5, null, list(4, 7));
similar(lst1, lst2);

// Q2D
function enter_copies(a, n, value, from) {
    if (n === 0) { // done
    } else {
        a[from] = value;
        enter_copies(a, n - 1, value, from + 1);
    }
}

function generate_sorted(arr) {
    let result = [];
    for (let i = 0; i < array_length(arr); i = i+1) {
        if (arr[i] !== 0) {
            result = enter_copies(res, arr[i], i, array_length(result));
        }
    }
    return res;
}
let histogram = [0,2,1,1,0,2,0,1,0,0,1,0,0];
generate_sorted(histogram);