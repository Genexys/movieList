import React, { Component } from 'react';
import Card from "../components/Card/Card";

class List extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            loading: true
        }
    }

    async componentDidMount() {
        const movies = await fetch('public/data.json');
        const moviesJSON = await movies.json();

        if (moviesJSON) {
            this.setState({
                data: moviesJSON,
                loading: false
            })
        }
    }

    render() {
        const { data, loading } = this.state;

        if (loading) {
            return <div>Loading...</div>
        }

        return (
            <div className="row justify-content-center">
                {data.map(movie =>
                    <div key={movie.id} className="col-7 col-sm-6 col-lg-4 col-xl-3">
                        <Card movie={movie}/>
                    </div>
                )}
            </div>
        )
    }
}

export default List;


