function swap(A, i, j) {
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

function reverse_array(A) {
    const len = array_length(A);
    const half_len = math_floor(len / 2);
    let i = 0;
    while (i < half_len) {
        const j = len - 1 - i;
        swap(A, i, j);
        i = i + 1;
    }
}

// const arr = [1, 2, 3, 4, 5];
// reverse_array(arr);
// arr;

function bubblesort_array(A) {
    const len = array_length(A);
    for (let i = len - 1; i >= 1; i = i - 1) {
        for (let j = 0; j < i; j = j + 1) {
            if (A[j] > A[j + 1]) {
                const temp = A[j];
                A[j] = A[j + 1];
                A[j + 1] = temp;
            }
        }
    }
}

// const AA = [3, 5, 2, 4, 1];
// bubblesort_array(AA);
// AA;

// T: O(n^2)

function bubblesort_list(lst) {
    const len = length(lst);
    
    for (let i = len - 1; i >= 1; i = i-1) {
        let curr = lst;
        
        for (let j = 0; j < i; j = j+1) {
            let current = head(curr);
            let next = head(tail(curr));
            if (current > next) {
                const tmp = head(curr);
                set_head(curr, next);
                set_head(tail(curr), tmp);
            }
            
            // Traverse through the list
            curr = tail(curr);
        }
    }
}

const BB = list(3, 5, 2, 4, 1);
bubblesort_list(BB);
BB;

const mem = [];

function read(n, k) {
    return mem[n] === undefined
           ? undefined
           : mem[n][k];
}

function write(n, k, value) {
    if (mem[n] === undefined) {
        mem[n] = [];
    }
    mem[n][k] = value;
}

function first_denomination(kinds_of_coins) {
    return kinds_of_coins === 1 ?   5 :
           kinds_of_coins === 2 ?  10 :
           kinds_of_coins === 3 ?  20 :
           kinds_of_coins === 4 ?  50 :
           kinds_of_coins === 5 ? 100 : 0;
}

// The non-memoized version.
function cc(amount, kinds_of_coins) {
    return amount === 0
           ? 1
           : amount < 0 || kinds_of_coins === 0
           ? 0
           : cc(amount, kinds_of_coins - 1)
             +
             cc(amount - first_denomination(kinds_of_coins),
                kinds_of_coins);
}

 

// The memoized version.
// n is the amount in cents, and k is the number of denominations.
function mcc(n, k) {
    if (n === 0) {
        return 1;
    } else if (n < 0 || k === 0) {
        return 0;
    } else if (read(n, k) !== undefined) {
        return read(n, k);
    } else {
        let res1 = mcc(n, k-1);
        let res2 = mcc(n - first_denomination(k), k);
        let res = res1 + res2;
        write(n, k, res);
        return res;
    }
}

// mcc(365, 5);  // Expected result: 1730