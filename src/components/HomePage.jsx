import React from 'react';
import ScrollArea from 'react-scrollarea';


export class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="centered">
                <div className="block">
                    <img className="portrait" src="dist/img/portrait.jpeg" />
                    <h1>Developer.</h1>
                    <p>With red hair.</p>
                </div>
            </div>
        );
    }
};
export default HomePage;