import React from 'react'

const Header = (props) => {
        return (
            <header className="top">
                <h1>Tadoe &amp; Tarantino's</h1>
                <h3 className="tagline">{props.phrase}</h3>
            </header>
        )
}
export default Header;