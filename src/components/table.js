import { documents } from "../utils/const";

function Table() {
    return (
        <table>
            <tr>
                <th>Документ</th>
                <th>Зачем нужен</th>
                <th>Выбор</th>
            </tr>
            {
                documents.map((element, index) => {
                return (
                        <tr key={element.element}>
                            <td>{element.name}</td>
                            <td>{element.reason}</td>
                            <td>
                                <input type="checkbox" value={element.element}/>
                            </td>
                        </tr>
                    );
                })
            }
        </table>
    );
}

export default Table;