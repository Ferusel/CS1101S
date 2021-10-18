function swap(A, i, j) {
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

function swap_2d(M, r1, c1, r2, c2) {
    const temp = M[r1][c1];
    M[r1][c1] = M[r2][c2];
    M[r2][c2] = temp;
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

function transpose_matrix(arr) {
    const n = array_length(arr);  // M is assumed n x n.
    for (let i = 0; i < n; i = i+1) {
        for (let j = 0; j < i; j = j+1) {
            swap_2d(arr, i, j, j, i);
        }
    }
}

function reverse_rows(arr) {
    const n = array_length(arr);  // M is assumed n x n.
    for (let i = 0; i < n; i = i+1) {
        reverse_array(arr[i]);
    }
}

function rotate_matrix(arr) {
    transpose_matrix(arr);
    reverse_rows(arr);
}


const M =
[[ 1,  2,  3,  4],
 [ 5,  6,  7,  8],
 [ 9, 10, 11, 12],
 [13, 14, 15, 16]];

const N = 
[['a','b','c'],
['d','e','f'],
['g','h','i']];
 
rotate_matrix(M);
M;
// M should have become
// [[13,  9, 5, 1], 
//  [14, 10, 6, 2], 
//  [15, 11, 7, 3], 
//  [16, 12, 8, 4]]

// rotate_matrix(N);
// N;