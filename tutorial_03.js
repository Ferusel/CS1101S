function pascal(row, pos) {
    if (row < 0 || pos < 0) {
        return 0;
    } else if (row === 0 && pos === 0) {
        return 1;
    } else {
        return pascal(row-1, pos) + pascal(row-1, pos-1);
    }
}

pascal(4, 2);