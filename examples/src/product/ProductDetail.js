/**
 * Created by korman on 14.04.17.
 */

import Config from '../Config';
import React from 'react';
import axios from 'axios';

export default class ShopperDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            data: {}
        };
    }

    componentDidMount() {
        const config = new Config();
        //
        axios.get(config.baseUrl + 'api/kankan/product/' + this.state.id)
            .then(res => {
                // console.log(res.data);
                const data = res.data;
                // const countPages = res.data.count_pages;
                this.setState({ data });

            });
    }

    render() {
        // const pages = [];
        //
        // for (let i = 1; i <= this.state.countPages; i++) {
        //     pages.push(<li key={i}><Link to=''>{i}</Link></li>);
        // }
        const props = [];
        for (let prop in this.state.data) {
            props.push(
                <tr key={prop}>
                    <td>{prop} : {this.state.data[prop]}</td>
                </tr>
            );
        }
        console.log(this.state);
        return (
            <div>
                <h4>Shoppers</h4>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props}
                    </tbody>
                </table>
            </div>
        );
    }
}