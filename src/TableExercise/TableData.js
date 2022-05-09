class TableData {
    constructor(rowCount, columnCount) {
        this.rowCount = rowCount;
        this.columnCount = columnCount;
    };

    getData() {
        return this.rowCount + ' ' + this.columnCount;
    }
}

export default TableData;