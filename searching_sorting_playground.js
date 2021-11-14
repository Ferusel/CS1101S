// Linear Search
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

function swap(A, x, y) {
    const temp = A[x];
    A[x] = A[y];
    A[y] = temp;
}

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
        }
        A[j + 1] = x;
    }
}

const A = [3, 9, 2, 1, 6, 5, 3, 8];
insertion_sort2(A);
A;


const A = [3, 9, 2, 1, 6, 5, 3, 8];
insertion_sort(A);
A;

