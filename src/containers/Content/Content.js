import React from 'react';
import Projects from '../projects/Projects';
import Interested from '../interested/Interested';
import WhatWeDo from '../whatWeDo/WhatWeDo';
import ToolsAndSkills from '../toolsAndSkills/ToolsAndSkillls';

const styles = {
    padding: {
        paddingTop: '3rem'
    }
}

class Content extends React.Component {
    render(){
        return(
            <div className="ui column grid">
                
                <h2>Projects</h2>
                <div className="row">
                    <div className="column">
                        <Projects />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <Projects />
                    </div>
                </div>


                <div className="row">
                    <div className="column">
                        <Interested />
                    </div>
                </div>
                
                <div style={styles.padding}>
                    <h2>What We Do</h2>
                </div>
                <div className="row">
                    <div className="column">
                        <WhatWeDo />
                    </div>
                </div>

                <div style={styles.padding}>
                    <h2>Tools & skills</h2>
                </div>
                <div className="row">
                    <div className="column">
                        <ToolsAndSkills />
                    </div>
                </div>
                <div className="row" style={styles.padding}>
                    <div className="column">
                        Made with Masroy
                    </div>
                </div>
            </div>
        )
    }

}

export default Content;