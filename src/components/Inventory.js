import React from 'react'
import AddFishForm from './AddFishForm'

class Inventory extends React.Component {
    render() {
        return (
            <div>
                <p>Inventory</p>
                <AddFishForm addFish={this.props.addFish} loadSamples={this.props.loadSamples}/>
                <button onClick={this.props.loadSamples}>Load Sample Data +</button>
            </div>
        )
    }
}

export default Inventory;