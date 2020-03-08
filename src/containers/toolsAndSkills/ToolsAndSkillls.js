import React from 'react';
import './ToolsAndSkills.scss';

class ToolsAndSkills extends React.Component {
    render(){
        return (
            <div className="ui grid">
                <div className="four column large screen only row">
                    <div className="column">
                        <div className="mini-card-tools">
                        Java Spring
                        </div>
                    </div>
                    <div className="column">
                        <div className="mini-card-tools">
                            Reactjs
                        </div>
                    </div>
                    <div className="column">
                        <div className="mini-card-tools">
                            React Native
                        </div>
                    </div>
                    <div className="column">
                        <div className="mini-card-tools">
                            Angular^
                        </div>
                    </div>
                </div>
                <div className="four column large screen only row">
                    <div className="column">
                        <div className="mini-card-tools">
                            ExpressJS
                        </div>
                    </div>
                    <div className="column">
                        <div className="mini-card-tools">
                            Figma
                        </div>
                    </div>
                    <div className="column">
                        <div className="mini-card-tools">
                            Corel Draw
                        </div>
                    </div>
                    <div className="column">
                        <div className="mini-card-tools">
                            Adobe Illustrator
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ToolsAndSkills;