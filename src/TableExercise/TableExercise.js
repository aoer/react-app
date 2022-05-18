import TableData from "./TableData";
import "./TableExercise.css";

function TableHeader({headerData}) {
    return headerData.map((hItem) => <th>{hItem}</th>);
}

function TableRows({rowData}) {
    return rowData.map((rItem) => <tr><TableColumns columnData={rItem}/></tr>);
}

function TableColumns({columnData}) {
    return columnData.map((cItem) => <td>{cItem}</td>);
}

function Table({tableData}) {
    return (
        <table>
            <TableHeader headerData={tableData.getHeaderData()} />
            <TableRows rowData={tableData.getRowData()} />
        </table>
    );
}

function TableExercise(props) {
    const tData = new TableData(props.rowCount, props.columnCount);
    tData.setCell(2, 2, 'Altered Cell!');
    tData.setRow(0, 'Altered Rows!');
    tData.setColumn(1, 'Altered Columns!');
    /*
    let buildTable = () => {
        const headerHTML = (hData) => hData.map((hItem) => <th>{hItem}</th>);
        const headerHTML_V2 = () => tData.getHeaderData().map((hItem) => <th>{hItem}</th>);
        const contentHTML = () => {
            const cData = tData.getRowData();
            return cData.map((rItem) => <tr>{rItem.map((cItem) => <td>{cItem}</td>)}</tr>);
        }
        const contentHTML_V2 = () => {
            return rowHTML(tData.getRowData());
        }
        
        const rowHTML = (rData) => rData.map((rItem) => <tr>{columnHTML(rItem)}</tr>);
        const columnHTML = (cData) => cData.map((cItem) => <td>{cItem}</td>);
        
        return (
            <table>
                <TableHeader headerData={tData.getHeaderData()} />
                <TableRows rowData={tData.getRowData()} />
            </table>
        )
    }
    */
    
    return (
        <div id='table-exercise'>
            <Table tableData={tData} />
        </div>
    )
}

export default TableExercise;