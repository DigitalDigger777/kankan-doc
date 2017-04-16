/**
 * Created by korman on 14.04.17.
 */

import Config from '../Config';
import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    componentDidMount() {
        const config = new Config();

        axios.get(config.baseUrl + 'api/kankan/product', {
            params: {
                method: 'LIST',
                page: 1,
                items_on_page: 10,
                shopperId: 676
            }
        }).then(res => {

            const items = res.data.items.map(obj => obj);
            this.setState({ items });
        });
    }

    render() {
        const pages = [];

        for (let i = 0; i < this.state.count_pages; i++) {
            pages.push('<li><a href="#">' + i + '</a></li>');
        }

        return (
            <div>
                <h4>Products</h4>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.items.map(product =>
                            <tr key={product.id}>
                                <td>{product.name}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <nav>
                    <ul className="pagination">
                        {pages}
                    </ul>
                </nav>

            </div>
        );
    }
}