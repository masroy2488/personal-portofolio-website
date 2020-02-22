import React from 'react';
import './SideBar.scss';
import { Image } from 'semantic-ui-react';

import Profile from '../../assets/images/profile.png';

export class SideBar extends React.Component {
    render(){
        return(
            <div className="ui fluid container">
                <div className="ui grid">
                    <div className="ui row">
                        <div className="nine wide stretched column" style={{paddingTop:'30px'}}>
                            <div className="ex3" style={{overflow:'hidden'}}>
                                <div className="ui secondary menu">
                                    <a className="item">
                                        Logo
                                    </a>
                                    <div className="right menu" style={{overflowY:'hidden'}}>
                                        <a className="ui item active">
                                            Home
                                        </a>
                                        <a className="ui item">
                                            Project
                                        </a>
                                        <a className="ui item">
                                            Contact
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="seven wide column">
                        <section className="col-12" id="sha-button_list">
                            <div className="row">
                                <div className="col-12">
                                    <ul>
                                        <li className="off">
                                            <span>
                                            <div className="ui secondary menu">
                                            <div className="right menu" style={{overflowY:'hidden'}}>
                                                <a className="ui item">
                                                <Image src={Profile} size='tiny' circular />
                                                </a>
                                            </div>
                                        </div>
                                            
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}