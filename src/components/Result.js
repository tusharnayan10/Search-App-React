import React from 'react';

const Result = (props) => {
        const res = ()=>{
        console.log(props.result);
            if (props.result === 0 || props.result == null) {
                return "Sorry we did't found any result!";
              }
              if (props.result > 0) {
                return "Found  Image Yo";
              }
              else {
                return "Error Undefined";
              }
        }
        
        return (
            <div style={{backgroundColor: 'red', color: 'white', fontSize: '3rem'}}>
                <h1>{res}</h1>
            </div>
        );
}

export default Result;
