import React from 'react';

class ImageCards extends React.Component{
    constructor(props){
        super(props);
        this.state = {span: 0};
        this.imageRef = React.createRef();
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpans);
        // console.log(this.imageRef);
    }
    setSpans = () =>{
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10 );
        this.setState({spans})
    }
    render(){
        const {description, urls} = this.props.image;
         return(
            <div style= {{gridRowEnd: `span ${this.state.spans}`}} >
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                    />
            </div>
        );
    }
}

export default ImageCards;
