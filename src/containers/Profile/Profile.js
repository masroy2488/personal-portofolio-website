import React from 'react';
import './Profile.scss';
import profile from '../../assets/images/profile.png';
import {Card} from '../../components/Card/Card';

class Profile extends React.Component {
    render() {
        return (
            <div className="ui profile">
                <div className="row">
                    <div className="box soft">
                    <div className="ui list">
                        <div className="item">
                            <div className="ui clearing">
                                <h3 className="ui right floated header">
                                    <img class="ui Massive circular image imageShadow" src={profile} style={{height:'120px', width:'120px'}} />
                                </h3>
                                <h3 className="ui left floated header">
                                    <div class="ui secondary  menu">
                                        <a class="active item">
                                            Home
                                        </a>
                                        <a class="item">
                                            Blog
                                        </a>
                                        <a class="item">
                                            Contact
                                        </a>
                                    </div>
                                </h3>
                            </div>
                        </div>
                        <div className="item" style={{paddingTop:'20px', textAlign:'left'}}>
                                <h2>Hi, i’m Mas Roy</h2>
                                <h1 style={{marginTop:'0px'}}>UI/UX Designer Who Teaches Design on Youtube.</h1>
                                <p>
                                    I’m from Indonesia and I have been working as a UI UX designer for more than 4 years and still love to do it every day. 
                                    I’ve worked for a Dutch company called Frisseblikken as a web designer and front-end developer for 3 years, and I also build
                                    my own web development team Duosweb since 2018. I’ve been freelancing for the last 7 years, and right now I am looking forward to working with you!
                                </p>
                        </div>
                        <div className="item"  style={{paddingTop:'15px', textAlign:'left'}}>
                            <Card />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;