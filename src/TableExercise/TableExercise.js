import TableData from "./TableData";
import "./TableExercise.css";

function TableExercise() {
    const tData = new TableData(3, 4);

    let buildTable = () => {
        return (
            <table>
                <tr>
                    <th>Default Header 1</th>
                </tr>
                <tr>
                    <td>Default Data 1</td>
                </tr>
            </table>
        )
    }
    
    return (
        <div id='table-exercise'>
            {tData.getData()}
            {buildTable()}
        </div>
    );
}

export default TableExercise;