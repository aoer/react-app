import TableData from "./TableData";
import "./TableExercise.css";

function TableExercise() {
    const tData = new TableData(6, 4);
    tData.setCell(2, 2, 'Altered Cell!');
    tData.setRow(0, 'Altered Rows!');
    tData.setColumn(1, 'Altered Columns!');

    let buildTable = (rowCount, columnCount) => {
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
                {headerHTML_V2()}
                {contentHTML_V2()}
            </table>
        )
    }
    
    return (
        <div id='table-exercise'>
            {buildTable()}
        </div>
    )
}

export default TableExercise;