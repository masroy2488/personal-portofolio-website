import React from 'react';
import './Interested.scss';


const style = {
    padding: {
        paddingTop: '1.6em',
        paddingLeft: '2em',
        paddingRight: '2em'
    }
}

class Interested extends React.Component {
    render(){
        return (
            <div className="card-interested">
                <div className="ui secondary menu"  style={style.padding}>
                    <p>Interested working with me?</p>
                    <div className="right menu">
                    <a className="item basic">See More Projects</a>
                    <a className="active item">Email Me</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Interested;