// let x = list(pair(1, tail(x)), list(3, 4));
// draw_data(x);

let x = 1;
function foo(a) {
    let x = a*2;
    return gee(x);
}
function gee(b) {
    x = x+2;
    return b+x;
}

// Q1H
function table_to_snake_list(array, height, width) {
    let res = null;
    let flag = true;
    for (let i = 0; i < height; i = i+1) {
        if (flag) {
            for (let j = 0; j < width; j = j+1) {
                res = append(res, list(array[i][j]));
            }
        } else {
            for (let j = width-1; j > -1; j = j-1) {
                res = append(res, list(array[i][j]));
            }
        }
        flag = !flag;
    }
    return res;
}

let table = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]];
table_to_snake_list(table, 4, 3);


// foo(3);
function mergeB(xs, ys) {
    if (is_null(xs)) {
        return ys;
    } else if (is_null(ys)) {
        return xs;
    } else {
        display(xs);
        display(ys);
        display("====");
        let hx = head(xs);
        let hy = head(ys);
        if (hx < hy) {
            let pointer = tail(xs);
            set_tail(xs, ys);
            mergeB(pointer, tail(ys));
            return xs;
        } else if (hy <= hx) {
            let pointer = tail(ys);
            set_tail(ys, xs);
            mergeB(tail(xs), pointer);
            return ys;
        }
    }
}

let lst1 = list(2, 3, 6);
let lst2 = list(1, 4, 5);
mergeB(lst1, lst2);

function are_equal_sets(set1, set2) {
    return accumulate((x, ys) => !is_null(member(x, set2)) && ys,
                        true,
                        set1);
}
function powerset(set){
    if (is_null(tail(set))) {
        return list(list(head(set)), list());
    } else {
        let res = powerset(tail(set));
        let curr = head(set);
        return append(res, map(x => append(x, list(curr)), res));
    }
}

// member(6, list(6));
let set1 = list(1, 2, 3, 4);
// let set2 = list(4,3,2);
// are_equal_sets(set1, set2);
display_list(powerset(set1));