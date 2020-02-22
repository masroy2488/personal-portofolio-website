import React from 'react';
import './Content.scss';

class Content extends React.Component {
    render() {
        return (
            <div className="ui content">
                <div className="row">
                    <h2 className="ui center aligned icon header">
                        <i className="circular users icon"></i>
                    </h2>
                </div>
                <div className="row" style={{paddingTop:'20px'}}>2</div>
                <div className="row">3</div>
                <div className="row">4</div>
                <div className="row">5</div>
            </div>
        )
    }
}

export default Content;