import React from 'react'
import Input from './Input'

class Form extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        address:'',
        city:'',
        state:'',
        price: 0,
        favorite: false,
        url: '',
        img: ''
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }
  
  componentWillMount() {
    // if(this.props.notice) {
    //   this.setState({
    //     title: this.props.notice.title || '',
    //     author: this.props.notice.author || '',
    //     phone: this.props.notice.phone || '',
    //     id: this.props.notice.id || ''
    //   })
    // }
  }
  
    handleChange (event) {
      this.setState({[event.target.id] : event.target.value})
    }
    handleSubmit (event){
      event.preventDefault()
      this.props.handleSubmit(
        event,
        {
            
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            price: this.state.price,
            favorite: this.state.favorite,
            url: this.state.url,
            img: this.state.img
        }
      )
      this.setState({
        address:'',
        city:'',
        state:'',
        price: 0,
        favorite: false,
        url: '',
        img: ''
      })
    //   if(this.props.notice) {
    //     this.props.toggleForm()
    //   }
      // this.props.toggleForm()
    }
    render () {
      return (
        <form onSubmit={this.handleSubmit}>
          <Input
            handleChange={this.handleChange}
            name={'address'}
            placeholder={'Address'}
            type={'text'}
            value={this.state.address}
            id={'address'}
           />
           <Input
            handleChange={this.handleChange}
            name={'city'}
            placeholder={'city'}
            type={'text'}
            value={this.state.city}
            id={'city'}
           />
           <Input
            handleChange={this.handleChange}
            name={'state'}
            placeholder={'state'}
            type={'text'}
            value={this.state.state}
            id={'state'}
           />
           <Input
            handleChange={this.handleChange}
            name={'img'}
            placeholder={'img'}
            type={'text'}
            value={this.state.img}
            id={'img'}
           />
           <Input
            handleChange={this.handleChange}
            name={'url'}
            placeholder={'url'}
            type={'text'}
            value={this.state.url}
            id={'url'}
           />
           <Input
            handleChange={this.handleChange}
            name={'price'}
            placeholder={'price'}
            type={'number'}
            value={this.state.price}
            id={'price'}
           />
         <input type='submit' value={this.props.notice ? "update this notice" : "Add a House"}/>
        </form>
      )
    }
  }

export default Form