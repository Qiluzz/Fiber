import React, {render, Component} from './react'


const root = document.getElementById('root')
let title='0000'
const jsx = (
    <div>
        <p>Hello React</p>
        <p>{title}Hello Fiber</p>
    </div>
)

// render(jsx, root)

class Greating extends Component {
    constructor(props){
        super(props)
    }

    render(){
    return(<div>{this.props.title}hahaha</div>)
    }
}

// render(<Greating title="world"/>, root)

function FnComponent(props) {
return <div>{props.title}FnComponet</div>
}
render( <FnComponent title="hello"/> , root)