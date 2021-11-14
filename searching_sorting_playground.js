// LISTS
// Binary Search
function binary_search (video , n, m) {
    if (m <= n) {
        return m;
    } else {
        const k = math_ceil ((n + m) / 2);
        const frame = get_frame_from_video (video , k);
        return broken_tyre ( frame )
        ? binary_search (video , n, k - 1)
        : binary_search (video , k, m);
    }
}


// Insertion Sort
function insert (x, xs) {
    return is_null (xs)
        ? list (x)
        : x <= head (xs)
        ? pair (x,xs)
        : pair ( head (xs), insert (x, tail (xs )));
}
function insertion_sort (xs) {
    return is_null (xs)
        ? xs
        : insert ( head (xs),
        insertion_sort ( tail (xs )));
}

// Selection Sort
function selection_sort (xs) {
    if ( is_null (xs )) {
        return xs;
    } else {
        const x = smallest (xs ); // P6A
        return pair (x,
        selection_sort(remove (x, xs )));
    }
}

// Merge Sort
function merge_sort (xs) {
    if ( is_null (xs) ||
        is_null (tail(xs))) {
        return xs;
    } else {
        const mid = middle ( length (xs ));
        return merge(merge_sort(take(xs, mid)),
                    merge_sort(drop(xs, mid)));
    }
}

function merge (xs , ys) {
    if ( is_null (xs )) {
        return ys;
    } else if ( is_null (ys )) {
        return xs;
    } else {
        const x = head (xs );
        const y = head (ys );
        return (x < y)
            ? pair (x, merge ( tail (xs), ys ))
            : pair (y, merge (xs , tail (ys )));
    }
}

// ARRAYS
// Binary Search
function binary_search(A, v) {
    function search(low, high) {
        if (low > high) {
            return false;
        } else {
            let mid = math_floor((low+high)/2);
            if (v < A[mid]) {
                return search(low, mid-1);
            } else if (v > A[mid]) {
                return search(mid+1, high);
            } else {
                return true;
            }
        }
    }
    
    return search(0, array_length(A)-1);
}

function binary_search_iter(A, v) {
    let low = 0;
    let high = array_length(A) - 1;
    while (low <= high) {
        const mid = math_floor((low + high) / 2 );
        if (v === A[mid]) {
            break;
        } else if (v < A[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return (low <= high);
}

// binary_search([1,2,3,4,5,6,7,8,9], 8);
// binary_search_iter([1,2,3,4,5,6,7,8,9], 8);


// Selection Sort
function selection_sort(A) {
    const len = array_length(A);

    for (let i = 0; i < len - 1; i = i + 1) {
        let min_pos = find_min_pos(A, i, len - 1);
        swap(A, i, min_pos);
    }
}

function find_min_pos(A, low, high) {
    let min_pos = low;
    for (let j = low + 1; j <= high; j = j + 1) {
        if (A[j] < A[min_pos]) {
            min_pos = j;
        }
    }
    return min_pos;
}

function swap(A, x, y) {
    const temp = A[x];
    A[x] = A[y];
    A[y] = temp;
}

// const A = [3, 9, 2, 1, 6, 5, 3, 8];
// selection_sort(A);
// A;


// Insertion Sort
function insertion_sort(A) {
    const len = array_length(A);
    
    for (let i = 1; i < len; i = i + 1) {
        let j = i - 1;
        while (j >= 0 && A[j] > A[j + 1]) {
            swap(A, j, j + 1);
            j = j - 1;
        }
    }
}

// function swap(A, x, y) {
//     const temp = A[x];
//     A[x] = A[y];
//     A[y] = temp;
// }

const A = [3, 9, 2, 1, 6, 5, 3, 8];
insertion_sort(A);
A;


// This alternative method replaces
// the swaps by shifting elements right.

function insertion_sort2(A) {
    const len = array_length(A);
    
    for (let i = 1; i < len; i = i + 1) {
        const x = A[i];
        let j = i - 1;
        while (j >= 0 && A[j] > x) {
            A[j + 1] = A[j]; // shift right
            j = j - 1;
            display("     " + stringify(A));
        }
        A[j + 1] = x;
        display(A);
    }
}

const B = [3, 9, 2, 1, 6, 5, 3, 8];
// insertion_sort2(B);
// B;

// Merge Sort
function merge_sort(A) {
    merge_sort_helper(A, 0, array_length(A) - 1);
}

function merge_sort_helper(A, low, high) {
    if (low < high) {
        const mid = math_floor((low + high) / 2);
        merge_sort_helper(A, low, mid);
        merge_sort_helper(A, mid + 1, high);
        merge(A, low, mid, high);
    }
}

function merge(A, low, mid, high) {
    const B = [];
    let left = low;
    let right = mid + 1;
    let Bidx = 0;
    
    while (left <= mid && right <= high) {
        if (A[left] <= A[right]) {
            B[Bidx] = A[left];
            left = left + 1;
        } else {
            B[Bidx] = A[right];
            right = right + 1;
        }
        Bidx = Bidx + 1;
    }
    
    while (left <= mid) {
        B[Bidx] = A[left];
        Bidx = Bidx + 1;
        left = left + 1;
    }   
    while (right <= high) {
        B[Bidx] = A[right];
        Bidx = Bidx + 1;
        right = right + 1;
    }
    
    for (let k = 0; k < high - low + 1; k = k + 1) {
        A[low + k] = B[k];
    }
}

const C = [3, 9, 2, 1, 6, 5, 3, 8];
merge_sort(C);
display(C);


