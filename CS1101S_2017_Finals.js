// Q1B 
// function similar(lst1, lst2) {
//     function helper(lst1, lst2, flag) {
//         if (is_null(lst1) && is_null(lst2)) {
//             return true;
//         } else if (head(lst1) !== head(lst2)) {
//             if (flag) {
//                 return false;
//             } else {
//                 return helper(lst1, lst2, false);
//             }
//         } else if (is_list(head(lst1))){
//             return helper(head(lst1), head(lst2), flag) && helper(tail(lst1), tail(lst2), flag);
//         } else {
//             return helper(tail(lst1), tail(lst2), flag);
//         }
//     }
//     return helper(lst1, lst2, true);
// }

function similar(lst1, lst2) {
    if (is_null(lst1) && is_null(lst2)) {
        return true;
    } else if (is_number(lst1) && is_number(lst2)) {
        return math_abs(lst1 - lst2) <= 1;
    } else if (is_pair(lst1) && is_pair(lst2)) {
        return similar(head(lst1), head(lst2)) && similar(tail(lst1), tail(lst2));
    } else {
        return false;
    }
}

// function similar(nt1, nt2) {
//     if (is_null(nt1) && is_null(nt2)) {
//         return true;
//     } else if (is_number(nt1) && is_number(nt2)) {
//         return nt1 - 1 <= nt2 && nt2 <= nt1 + 1;
//     } else if (is_pair(nt1) && is_pair(nt2)) {
//         return similar(head(nt1), head(nt2)) &&
//         similar(tail(nt1), tail(nt2));
//     } else {
//         return false;
//     }
// }

let lst1 = list(4, list(5, 6));
let lst2 = list(4, null, list(5, 6));
let lst3 = list(5, null, list(4, 7));
similar(lst2, lst3);

// Q2D
function enter_copies(a, n, value, from) {
    if (n === 0) { // done
    } else {
        a[from] = value;
        enter_copies(a, n - 1, value, from + 1);
    }
    return a;
}

function generate_sorted(arr) {
    let result = [];
    for (let i = 0; i < array_length(arr); i = i+1) {
        if (arr[i] !== 0) {
            display(result);
            let arr_len = array_length(result);
            result = enter_copies(result, arr[i], i, arr_len);
        }
    }
    return result;
}
let histogram = [0,2,1,1,0,2,0,1,0,0,1,0,0];
// generate_sorted(histogram);