import React from 'react'
import {Route} from 'react-router-dom'
import Designers from '../components/Designers/Designers';
import Homepage from '../components/Homepage/Homepage';
import DesignersViewAll from '../components/Designers/ViewAll/DesignersViewAll';

export default function Routes() {
    return (
        <div className="Routes">
           <Route exact path="/" component={Homepage} />
           <Route exact path="/designers" component={Designers} />
           <Route exact path="/designers/ViewAll" component={DesignersViewAll} />
        </div>
    )
}
