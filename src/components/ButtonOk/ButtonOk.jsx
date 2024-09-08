import styles from './ButtonOk.module.css';

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function ButtonOk({ navOnClick, buttonText = "1"}) {
    return (
        <div className={styles.root}>
            <Stack spacing={2} direction="row">
                <Button className={styles.buttonOk} variant="contained" onClick={navOnClick}>{buttonText}</Button>
            </Stack>
        </div>
    );
}

export default ButtonOk