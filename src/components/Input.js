import React from 'react'

// const Input = props => {
//   const {handleChange, name, placeholder, title, type, value} = props
//     return (
//       <>
//         <label htmlFor={name}>{title}</label>
//         <input
//           id={name}
//           name={name}
//           type={type}
//           value={value}
//           onChange={handleChange}
//           placeholder={placeholder}
//         />
//       </>
//     )
// }

class Input extends React.Component {
    render () {
        return (
            <div>
                {/* <h5>stuff</h5> */}
            <label htmlFor={this.props.name}>{this.props.name}</label>
            <input
              id={this.props.name}
              name={this.props.name}
            //   type={this.props.type}
              value={this.props.value}
              onChange={this.props.handleChange}
              placeholder={this.props.placeholder}
            />
            </div>
        )
    }
}

export default Input