import React from 'react';

import { Link } from '@material-ui/core';

function Header() {
    return (
        <header id="header">
            <Link href="/"><img id="logo" src='https://www.deltadefense.com/public/img/USCCA-DD-logo.png' alt='' /></Link>
            <Link color="secondary" underline="none" href="/">Home</Link>
        </header>
    )
}

export default Header;