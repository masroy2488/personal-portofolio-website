import React from 'react';
import './Card.scss';

export function Card (props) {
    return (
        <div class="col-12" id="sha-button_list">
            <div class="row">
                <div class="col-12">
                    <ul>
                        <li class="off">
                            <span>
                            <i class="envelope outline icon"></i>
                            </span>
                        </li>
                        <li class="off">
                            <span>
                                <i class="linkedin icon"></i>
                            </span>
                        </li>
                        <li class="off">
                            <span>
                            <i class="youtube icon"></i>
                            </span>
                        </li>
                        <li class="off">
                            <span>
                            <i class="github icon"></i>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}