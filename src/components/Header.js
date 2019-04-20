import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.tagline}</h1>
            </div>
        )
    }
}

export default Header;