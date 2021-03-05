import React from 'react';

import classes from './DrawerToggle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <FontAwesomeIcon color="white" icon={faBars} size="2x"></FontAwesomeIcon>
    </div>
);

export default drawerToggle;
