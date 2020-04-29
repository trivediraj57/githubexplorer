import React from 'react';
import Spinner from './spinner.gif';

class spinner extends React.Component {
    render() {
        return(
                <img src={Spinner} alt="Loading..." style={{display:"flex",width:"150px"}}></img>
        )
}
}

export default spinner