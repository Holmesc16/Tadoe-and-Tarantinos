import React from 'react'

class StorePicker extends React.Component {
    render() {
        return (
            <div>
                
                <h1 id="title">Tadoe &amp; Tarantino<sup>'</sup>s</h1>
                <img id="shop" src="shop.png" alt=""/>
                <form className="store-selector">
                    <h2>Please Enter a Store</h2>
                    <input type="text" required placeholder="Store Name" />
                    <button type="submit">Visit →</button>
                </form>
            </div>
        )
    }
}

export default StorePicker;