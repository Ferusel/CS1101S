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
binary_search([1,2,3,4,5,6,7,8,9], 8);
binary_search_iter([1,2,3,4,5,6,7,8,9], 8);