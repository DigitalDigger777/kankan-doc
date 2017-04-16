/**
 * Created by korman on 14.04.17.
 */

import Config from '../Config';
import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Shopper extends React.Component {
    constructor(props) {
        super(props);

        console.log(props.match.params.page);
        this.state = {
            items: [],
            countPages: 0,
            page: props.match.params.page == undefined ? 2 : props.match.params.page
        };
    }

    loadItems(page) {
        this.state = {
            items: [],
            countPages: 0,
            page: page
        };

        const config = new Config();

        axios.get(config.baseUrl + 'api/kankan/shopper', {
            params: {
                method: 'LIST',
                page: page,
                items_on_page: 10
            }
        }).then(res => {

            const items = res.data.items.map(obj => obj);
            const countPages = res.data.count_pages;
            this.setState({ items, countPages});

        });
    }

    componentDidMount() {
        const page = this.props.match.params.page == undefined ? 1 : this.props.match.params.page;
        this.loadItems(page);
    }
    componentWillReceiveProps(props){
        const page = props.match.params.page == undefined ? 2 : props.match.params.page;
        this.loadItems(page);
    }

    render() {
        const pages = [];

        for (let i = 1; i <= this.state.countPages; i++) {
            pages.push(<li key={i}><Link to={'/shoppers/' + i}>{i}</Link></li>);
        }

        return (
            <div>
                <h4>Shoppers {this.props.match.params.page}</h4>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.items.map(shopper =>
                        <tr key={shopper.id}>
                            <td><Link to={'/shopper/' + shopper.id}>{shopper.name}</Link></td>
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