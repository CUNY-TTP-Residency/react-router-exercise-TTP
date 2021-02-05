import { Component } from 'react'
import {Link, Route} from 'react-router-dom'

class Contacts extends Component{
    render() {
        return ( 
            <>
                <div> This is the contact page.
                    <ul>
                        <li><Link to="/president">President</Link></li>
                        <li><Link to="/founder">Founder</Link></li>
                        <li><Link to="/ceo">CEO</Link></li>
                    </ul>     
                </div>
            </>
        );
    }
}

export default Contacts;