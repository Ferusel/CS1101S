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
insertion_sort2(B);
B;

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

const A = [3, 9, 2, 1, 6, 5, 3, 8];
merge_sort(A);
A;


