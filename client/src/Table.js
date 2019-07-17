import React, { Component, Fragment } from 'react';
import TableColumnHeaders from './TableColumnHeaders';

class Table extends Component {

    render() {
            return (
                <Fragment>
                    <p><b>Number of Customers:</b> {Object.keys(this.props.apiReceivedResponse).length}</p>
                    <table className='table'>
                        <TableColumnHeaders />
                        <tbody>
                            {this.props.apiReceivedResponse.map(apiReceivedResponse =>
                                this.renderTableRow(apiReceivedResponse)
                            )}
                        </tbody>
                    </table>
                </Fragment>
            )
    }

    renderTableRow(apiReceivedResponse) {
        return (
            <tr key={apiReceivedResponse.PhoneNumber}>
                <td>{apiReceivedResponse.PhoneNumber}</td>
                <td>{apiReceivedResponse.AccountBalance}</td>
            </tr>);
    }

}

export default Table;