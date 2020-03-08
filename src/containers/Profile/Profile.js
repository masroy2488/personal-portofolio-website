import React from 'react';
import './Profile.scss';
import profile from '../../assets/images/profile.png';

const style = {
    padding: {
        paddingTop: '1.25em',
        paddingLeft: '2em',
        paddingRight: '2em'
    },
    image: {
        height: '8em',
        width: '8em'
    },
    list : {
        textAlign:'left',
        paddingTop: '0em',
        paddingLeft: '2em',
        paddingRight: '2em'
    }
}

class Profile extends React.Component {
    render() {
        return (
            <div>
                <div className="c-button">
                    <div className="ui secondary menu" style={style.padding} >
                        <a className="active item">Home</a>
                        <a className="item">Messages</a>
                        <a className="item">Friends</a>
                        <div className="right menu">
                            <div className="item">
                                <img src={profile} className="ui medium circular image" style={style.image} />
                            </div>
                        </div>
                    </div>

                    <div role="list" className="ui list" style={style.list}>
                        <div role="listitem" className="item h1">
                            <div className="header">
                                <h2>Hi, i’m Mas Roy</h2>
                            </div>
                        </div>
                        <div role="listitem" className="item">
                            <div className="header">
                                <h1>Designer, Front-end Developer</h1>
                            </div>
                        </div>
                        <div role="listitem" className="item">
                            <div className="meta">
                                                  
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </div>
                    </div>

                    <div className="ui grid" style={style.padding}>
                        <div className="column">
                            <div className="mini-card">Email</div>
                            <div className="mini-card">Github</div>
                            <div className="mini-card">Linkedin</div>
                            <div className="mini-card">Youtube</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Profile;