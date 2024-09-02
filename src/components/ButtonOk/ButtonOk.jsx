import styles from './ButtonOk.module.css';

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function ButtonOk() {
    return (
        <div className={styles.root}>
            <Stack spacing={2} direction="row">
                <Button className={styles.buttonOk} variant="contained">Go!</Button>
            </Stack>
        </div>
    );
}

export default ButtonOk