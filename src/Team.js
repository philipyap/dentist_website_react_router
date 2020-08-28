import React, {Component} from 'react'

class Team extends Component {
    render(){
        const ourTeamList= this.props.team.map((t, idx)=>{
        return <li key={idx}>{t}</li>
        })
        return(
            <div>
            <h1>Our Team</h1>
            {ourTeamList}
            </div>
        )
    }
}
export default Team