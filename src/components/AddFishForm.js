import React from 'react'

class AddFishForm extends React.Component {
    // constructor() {
    //     super()
    //     this.createFish = this.createFish.bind(this)
    // }
     createFish(e) {
        e.preventDefault()
        let fish = {
            name: this.name.value,
            price: this.price.value,
            status: this.status.value,
            description: this.description.value,
            image: this.image.value
        }
        this.props.addFish(fish)
    }
    render() {
        return (
          <form className="fish-edit" onSubmit={(e) => this.createFish(e)}>
          <input ref={(input) => this.name = input} type="text" placeholder="Fish Name" />
          <input ref={(input) => this.price = input} type="text" placeholder="Fish Price"/>
          <select ref={(input) => this.status = input} name="" id="">
            <option value="available">Fresh Indeed</option>
            <option value="">Totally Out!</option>
          </select>
          <textarea ref={(input) => this.description = input} name="" id="" cols="30" rows="10" placeholder="Fish Description"></textarea>
          <input ref={(input) => this.image = input} type="text" placeholder="Image URL"/>
          <button type="submit">+ Add Fish&nbsp;<span role="img" aria-label="fish">🐟</span></button>
        </form>
        )
    }
}
export default AddFishForm;