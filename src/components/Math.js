import React, {Component} from 'react'
import '../styles/Math.css'

class Math extends Component {
    

    constructor(props) {
        super();
        this.state = {
            matrix: [],
            twoXtwo: true,
            loading: false,
            output: null,
            x2n1: 0,
            x2n2: 0,
            x2n3: 0,
            x2n4: 0,
            x3n1: 0,
            x3n2: 0,
            x3n3: 0,
            x3n4: 0,
            x3n5: 0,
            x3n6: 0,
            x3n7: 0,
            x3n8: 0,
            x3n9: 0,
        }
    }
    
    componentWillUpdate(nextProps, state){
        var display = matrixMath(state);
        if(this.state.output !== display){
            this.setState({output: display});
        }
    }
    
    
    
    render() {
        return (
            <div className='uploadContainer'>
                <div>
                    <div class="mathFlex">
                        <div onClick={(e) => this.setState({twoXtwo: true})} className={(this.state.twoXtwo ?
                            'selected' : 'unselected') + " button"}>
                            2X2
                        </div>
                        <div onClick={(e) => this.setState({twoXtwo: false})} className={(this.state.twoXtwo ?
                            'unselected' : 'selected') + " button"}>
                            3X3
                        </div>
                    </div>
                </div>
                {this.state.twoXtwo ?
                    <div>
                        <div className='mathFlex'>
                            <input
                                className="button"
                                value={this.state.x2n1}
                                onChange={(e) => this.setState({x2n1: e.target.value})}
                                type='number'
                                placeholder='0'
                            />
                            <input
                                className="button"
                                value={this.state.x2n2}
                                onChange={(e) => this.setState({x2n2: e.target.value})}
                                type='number'
                                placeholder='0'
                            />
                        </div>
                        <div className='mathFlex'>
                            <input
                                className="button"
                                value={this.state.x2n3}
                                onChange={(e) => this.setState({x2n3: e.target.value})}
                                type='number'
                                placeholder='0'
                            />
                            <input
                                className="button"
                                value={this.state.x2n4}
                                onChange={(e) => this.setState({x2n4: e.target.value})}
                                type='number'
                                placeholder='0'
                            />
                        </div>
                    </div>
                    :
                    <div>
                        <div className='mathFlex'>
                            <input
                                className="button"
                                value={this.state.x3n1}
                                onChange={(e) => this.setState({x3n1: e.target.value})}
                                type='number'
                                placeholder='0'
                            />
                            <input
                                className="button"
                                value={this.state.x3n2}
                                onChange={(e) => this.setState({x3n2: e.target.value})}
                                type='number'
                                placeholder='0'
                            />
                            <input
                                className="button"
                                value={this.state.x3n3}
                                onChange={(e) => this.setState({x3n3: e.target.value})}
                                type='number'
                                placeholder='0'
                            />
                        </div>
                        <div className='mathFlex'>
                            <input
                                className="button"
                                value={this.state.x3n4}
                                onChange={(e) => this.setState({x3n4: e.target.value})}
                                type='number'
                                placeholder='0'
                            />
                            <input
                                className="button"
                                value={this.state.x3n5}
                                onChange={(e) => this.setState({x3n5: e.target.value})}
                                type='number'
                                placeholder='0'
                            />
                            <input
                                className="button"
                                value={this.state.x3n6}
                                onChange={(e) => this.setState({x3n6: e.target.value})}
                                type='number'
                                placeholder='0'
                            />
                        </div>
                        <div className='mathFlex'>
                            <input
                                className="button"
                                value={this.state.x3n7}
                                onChange={(e) => this.setState({x3n7: e.target.value})}
                                type='number'
                                placeholder='0'
                            />
                            <input
                                className="button"
                                value={this.state.x3n8}
                                onChange={(e) => this.setState({x3n8: e.target.value})}
                                type='number'
                                placeholder='0'
                            />
                            <input
                                className="button"
                                value={this.state.x3n9}
                                onChange={(e) => this.setState({x3n9: e.target.value})}
                                type='number'
                                placeholder='0'
                            />
                        </div>
                    </div>
                }
                <div className="button mathFlex" onClick={() => this.ProcessMatrix(this)}>
                    Get Determinant
                </div>
                {this.state.output}
            </div>
        )
    }
}
function matrixMath(state) {
    let display = '';
    let matrix = '';
    if(state.twoXtwo){
        matrix = [state.x2n1, state.x2n2, state.x2n3, state.x2n4]
        for (let i = 0; i < matrix.length; i++) {
            matrix[i] = parseInt(matrix[i]) || 0
        }
        
    } else {
        matrix = [state.x3n1, state.x3n2, state.x3n3, state.x3n4, state.x3n5, state.x3n6, state.x3n7, state.x3n8
        , state.x3n9];
        for (let i = 0; i < matrix.length; i++) {
            matrix[i] = parseInt(matrix[i]) || 0
        }
        
    }
    return display
}


export default Math