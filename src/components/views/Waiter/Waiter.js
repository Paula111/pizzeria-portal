import React from 'react';
import styles from './Waiter.scss';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Waiter = () => {
    return (
        <div className={styles.component}>
            <h2>Waiter view</h2>
            <Button variant='contained' size='small' color='primary'><Link to={process.env.PUBLIC_URL + '/waiter/new'}>New Order</Link></Button>
            <Button variant='contained' size='small' color='secondary'><Link to={process.env.PUBLIC_URL + '/waiter/order/123abc'}>Orders</Link></Button>
        </div>
    );
};
export default Waiter;