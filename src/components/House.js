import React from 'react'

class House extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // addressState: this.props.address

        }
    }
    render () {
        return(
            <div key = {this.props.id} className = 'house'>
                <a href = {this.props.url}><h5>{this.props.address}</h5></a>
                <h5>{this.props.city}</h5>
                <h5>{this.props.state}</h5>
                <h5>{this.props.favorite}</h5>
                <h5>{this.props.price}</h5>
                <img src={this.props.img} alt = {this.props.address} />
                <button onClick = {() => this.props.delete(this.props.fullHouse)}>Delete</button>
                



            </div>
        )
    }
}


export default House


// key = {house.id}
// address = {house.address}
// city = {house.city}
// state = {house.state}
// favorite = {house.favorite}
// img = {house.image}
// url = {house.url}
// price = {house.price}/>