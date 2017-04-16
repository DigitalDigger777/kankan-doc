/**
 * Created by korman on 14.04.17.
 */

import Config from '../Config';
import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default class Sponsor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    componentDidMount() {
        const config = new Config();

        axios.get(config.baseUrl + 'api/kankan/sponsor', {
            params: {
                method: 'LIST',
                page: 1,
                items_on_page: 10
            }
        }).then(res => {

                const items = res.data.items.map(obj => obj);
                this.setState({ items });
        });
    }

    render() {
        const pages = [];

        for (let i = 1; i <= this.state.countPages; i++) {
            pages.push(<li key={i}><Link to={'/shoppers/' + i}>{i}</Link></li>);
        }

        return (
            <div>
                <h4>Sponsors</h4>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.items.map(sponsor =>
                            <tr key={sponsor.id}>
                                <td>{sponsor.name}</td>
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