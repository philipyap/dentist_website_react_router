import React, {Component} from 'react'

class Procedures extends Component{
    render(){
        const procedureList = this.props.procedures.map((p, idx)=> {
            return <li key={idx}>{p}</li>
        })
        return(
            <>
            <h1>Procedures</h1>
            {procedureList}
            </>
        )
    }
}
export default Procedures