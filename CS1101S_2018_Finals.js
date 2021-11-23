const input = list(1,2,3);
const result = append(input, input);
draw_data(result);
head(input) === list_ref(result, 3);

function bubblesort_list(L) {
    const len = length(L);
    for (let i = len - 1; i >= 1; i = i-1) {
        let p = L;
        for (let j = 0; j < i; j = j+1) {
            if (list_ref(L, j) > list_ref(L, j+1)) {
                const a = list_ref(L, j);
                const b = list_ref(L, j+1);
                function setter(xs, n, x) {
                    if (n === 0) {
                        // let tmp = head(xs);
                        set_head(xs, x);
                    } else {
                        return setter(tail(xs), n-1, x);
                    }
                }
                setter(L, j, b);
                setter(L, j+1, a);
            }
        }
    }
}

let lst = list(3,5,2,4,1);
bubblesort_list(lst);
lst;
