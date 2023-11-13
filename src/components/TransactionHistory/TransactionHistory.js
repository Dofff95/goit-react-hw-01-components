import CSS from "./transactions.module.css";
import PropTypes from "prop-types";
function TransactionHistory({items}) {
    return (<table className={CSS.transaction_history} key="transaction">
        <thead>
        <tr>
         <th>Type</th>
         <th>Amount</th>
         <th>Currency</th>
        </tr>
        </thead>
        <tbody>
           { items.map(({id, type, amount, currency}) => {
            return(
                <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
                </tr>
            )
        })}
        </tbody>
    </table>
    )
}

TransactionHistory.propTypes ={
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string
}
export default TransactionHistory
