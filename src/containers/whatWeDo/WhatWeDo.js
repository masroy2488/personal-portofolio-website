import React from 'react';
import './WhatWeDo.scss';

class WhatWeDo extends React.Component {
    render(){
        return (
            <div className="ui grid">
                <div className="two column large screen only row">
                    <div className="column">
                        <div className="mini-cards">Web Design</div>
                    </div>
                    <div className="column">
                        <div className="mini-cards">Mobile Design</div>
                    </div>
                </div>
                <div className="two column large screen only row">
                    <div className="column">
                        <div className="mini-cards">Interaction</div>
                    </div>
                    <div className="column">
                        <div className="mini-cards">Logo Design</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WhatWeDo;