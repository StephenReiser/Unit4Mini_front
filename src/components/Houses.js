import React from 'react'
import House from './House'
import Form from './Form'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000'
} else {
  baseURL = 'https://guarded-beyond-82349.herokuapp.com/'
}



class Houses extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            houses: []
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    // function to fetch data and set index
    componentDidMount() {
        this.getHouses()
      }
      getHouses (){
        // since we defined a proxy 'localhost:3000 in the package json, we can just fetch '/notices'
        fetch(baseURL + '/houses')
        .then(response => response.json()).then((json) => {
          return this.setState({
            houses:json
          }
          )})
        .catch(error => console.error(error))
      }
      handleAdd(event, formInputs) {
        event.preventDefault()
        fetch(baseURL + '/houses', {
          body: JSON.stringify(formInputs),
          method: 'POST',
          headers: {
            'Accept': 'applciation/json, text/plain, */*',
            'Content-Type': 'application/json'
          }
        })
        .then (createdHouse => {
          return createdHouse.json()
        })
        .then (jsonedHouse => {
          return this.setState({
            houses: [jsonedHouse, ...this.state.houses]
            // currently houses isn't getting read
          })
        })
        .catch(error => console.log(error))
      }



    //   delete funciton:
    // handleDelete (deletedHouse) {
    //     fetch(`/houses/${deletedHouse.id}`, {
    //       method: 'DELETE',
    //       headers: {
    //         'Accept': 'application/json, text/plain, */*',
    //         'Content-Type': 'application/json'
    //       }
    //     }).then(json => {
    //       this.setState(state => {
    //         const houses = state.houses.filter(house => house.id !== deletedHouses.id)
    //         return {
    //           houses
    //         }
    //         // need to wrap notices in curlys for this to work
    //       })
    //     }).catch(error => {console.log(error)})
    // }

    handleDelete (deletedHouse) {
        fetch(baseURL + `/houses/${deletedHouse.id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }}).then(json => {
              this.setState(state => {
                  const houses = state.houses.filter(house => house.id !== deletedHouse.id)
                  return {
                      houses
                  }
              })
          }).catch(error => {console.log(error)})
        
        
        }

        handleUpdate (event, formInputs) {
          event.preventDefault()
          console.log(formInputs)
          fetch(baseURL + `/houses/${formInputs.id}`, {
            body: JSON.stringify(formInputs),
            method: 'PUT',
         headers: {
           'Accept': 'application/json, text/plain, */*',
           'Content-Type': 'application/json'
         }
        })
         .then(updatedNotice => {
           // be naughty - realistically should just rerender the one item
           this.getHouses()
         })
         .catch(error => console.log(error))
        }
      
    render () {
        return(
            <div>
                <header>
                    <Form handleSubmit = {this.handleAdd}/>
                     
                </header>
                {this.state.houses.map(house => {
                    return <div className = 'house' key = {house.id}>
                        <House 
                        key = {house.id}
                        address = {house.address}
                        city = {house.city}
                        state = {house.state}
                        favorite = {house.favorite}
                        img = {house.img}
                        url = {house.url}
                        price = {house.price}
                        delete = {this.handleDelete}
                        fullHouse = {house}
                        edit = {this.handleUpdate}/>
                    </div>
                })}
                
            </div>
        )
    }
}


export default Houses