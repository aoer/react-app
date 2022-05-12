class TableData {
    constructor(rowCount, columnCount) {
        this.rowCount = rowCount;
        this.columnCount = columnCount;
        this.header = [];
        this.rows = [];
        this.initDefaultTable();
    };

    initDefaultTable() {
        for(let c=0; c<this.columnCount; c++) {
            this.header[c] ='Default Header ' + c;
        }

        for(let r=0;r<this.rowCount; r++) {
            let row = [];
            for(let c=0; c<this.columnCount; c++) {
                row[c] ='Default Cell ' + r + ' ' + c;
            }
            
            this.rows[r] = row; 
        }

    }

    getHeaderData() {
        return this.header;
    }

    getRowData() {
        return this.rows;
    }

    setCell(row, column, value) {
        if (!this.isValidRow(row) || !this.isValidColumn(column))
            return;
        this.rows[row][column] = value;
    }

    setRow(row, value) {
        if (!this.isValidRow(row))
            return;
        for (let i=0; i < this.rows[row].length; i++) {
            this.rows[row][i] = value;
        }       
    }

    setColumn(column, value) {
        if (!this.isValidColumn(column))
            return;
        for (let r=0; r < this.rows.length; r++) {
            this.rows[r][column] = value;
        }
    }

    isValidRow(rowNumber) {
        if (rowNumber < 0 || rowNumber >= this.rowCount)
            return false;
        return true;
    }

    isValidColumn(columnNumber) {
        if (columnNumber < 0 || columnNumber >= this.columnCount)
            return false;
        return true;
    }
}

export default TableData;