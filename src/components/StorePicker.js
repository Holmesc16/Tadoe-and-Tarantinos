import React from 'react'
import { fakeStoreName } from '../helpers'
import propTypes from 'prop-types'

// import Logo from './Logo'

class StorePicker extends React.Component {
    static propTypes = {
        history: propTypes.object
    }  

    goToStore(e) {
        e.preventDefault()
        const storeName = this.storeInput.value
        this.props.history.push(`store/${storeName}`)
    }
    
    render() {
        return (
            <div>
                <h1 id="title">Tadoe &amp; Tarantino's</h1>
                <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
                    <h2>Please Enter a Store</h2>
                    <input type="text" required placeholder="Store Name"
                        ref={(input) => this.storeInput = input}
                        defaultValue={fakeStoreName()} />
                    <button type="submit">Visit →</button>
                </form>
            </div>
        )
    }
}

export default StorePicker;