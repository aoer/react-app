import TableData from "./TableData";
import "./TableExercise.css";

function TableHeader({headerData}) {
    return headerData.map((hItem) => <th>{hItem}</th>);
}

function TableRows({rowData, id}) {
    return rowData.map((rItem) => <tr><TableColumns columnData={rItem} id={id}/></tr>);
}

function TableColumns({columnData, id}) {
    const ClearPreviousCellSelections = () => {
        let cells = document.getElementById(id).getElementsByTagName('td');
        console.log(cells);
        for (let i = 0; i < cells.length; i++) {
            cells[i].className = '';
        }
    }
    
    const CellSelected = (event) => {
        // Select/Deselect table cell
        ClearPreviousCellSelections();
        if(event.target.className === ''){
            event.target.className = 'selected';
        }else if (event.target.className === 'selected'){
            event.target.className = '';
        }
        //console.log(event);
    }

    return columnData.map((cItem) => <td className='' onClick={(event) => CellSelected(event)} >{cItem}</td>);
}

function Table({tableData, id}) {
    return (
        <table id={id}>
            <TableHeader headerData={tableData.getHeaderData()} />
            <TableRows rowData={tableData.getRowData()} id={id} />
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
            <Table tableData={tData} id='tb1' />
            <Table tableData={tData} id='tb2' />
        </div>
    )
}

export default TableExercise;