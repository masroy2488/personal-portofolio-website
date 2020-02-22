import React, { Component } from 'react';
import Profile from './containers/Profile/Profile';
import Content from './containers/Content/Content';

class App extends Component {
    render(){
        return (
            <div className="ui equal width center aligned padded grid">
                <div className="row" style={{backgroundColor:'#F1F3F6'}}>
                    <div className="nine wide column ">
                        <Content />
                    </div>
                    <div className="seven wide column" style={{paddingTop:'10px'}}>
                        <Profile />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;