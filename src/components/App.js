import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import samples from '../samples'

class App extends React.Component {
    constructor() {
        super()
        this.addFish = this.addFish.bind(this)
        this.loadSamples = this.loadSamples.bind(this)
        //getInitialState
        this.state = {
            fishes: {},
            order: {}
        }
    }

    addFish(fish) {
        //spread copy of existing state
        const fishes = {...this.state.fishes}
        //update state
        fishes[`fish-${Date.now()}`] = fish
        //set state
        this.setState({ fishes:fishes })
        console.log(this.state)
    }

    loadSamples(){
        this.setState({
            fishes: samples
        })
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header phrase="San Francisco's Ammunition and Seafood Mercantile" />
                </div>
                <Order/>
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
            </div>
        )
    }
}

export default App;