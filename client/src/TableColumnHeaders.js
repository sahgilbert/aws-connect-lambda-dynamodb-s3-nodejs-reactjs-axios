import React, { Component, Fragment } from 'react';

class TableColumnHeaders extends Component {

    render() {
            return (
                <Fragment>
                        <thead>
                            <tr>
                                <th>Phone Number</th>
                                <th>Account Balance</th>
                            </tr>
                        </thead>
                </Fragment>
            )
    }
}

export default TableColumnHeaders;