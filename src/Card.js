import React from 'react';

const card = ({name,email,id}) =>    // Destructuring. instead of function (props)
{
    // we can also do destructuring like this //. const {name,email,id} = props; 
    // otherwise we have to do like props.name, props.email etc.
    return(
        <div className= 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src= {`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>  
                <p>{email}</p>
            </div>
        </div>
    );
}

export default card;
