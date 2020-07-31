import React from 'react';
import ReactDOM from 'react-dom';
import List from "./containers/List";
import "bootstrap/dist/css/bootstrap-grid.min.css";



const App = () => {
    return (
        <div className='container-fluid'>
            <List />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
