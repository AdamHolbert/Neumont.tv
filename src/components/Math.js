import React, {Component} from 'react'
import '../styles/Math.css'

class Math extends Component {
    

    constructor(props) {
        super();
        this.state = {
            savedMatrices: [],
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
                <div className='output' dangerouslySetInnerHTML={{ __html: oldMatrices(this.state.savedMatrices)}}>
               
                </div>
                <div>
                    <div className="mathFlex">
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
                <div className='button' onClick={() => {
                    this.state.savedMatrices.push(getMatrixFromState(this.state));
                    this.forceUpdate();
                }}>
                    Save Matrix
                </div>
                <div className='output' dangerouslySetInnerHTML={{ __html: this.state.output }}>
                
                </div>
            </div>
        )
    }
}

function getMatrixFromState(state) {
    let matrix = '';
    if (state.twoXtwo) {
        matrix = [state.x2n1, state.x2n2, state.x2n3, state.x2n4];
        for (let i = 0; i < matrix.length; i++) {
            matrix[i] = parseInt(matrix[i]) || 0
        }
        matrix = [
            [matrix[0], matrix[1]],
            [matrix[2], matrix[3]]
        ]
    } else {
        matrix = [state.x3n1, state.x3n2, state.x3n3, state.x3n4, state.x3n5, state.x3n6, state.x3n7, state.x3n8
            , state.x3n9];
        for (let i = 0; i < matrix.length; i++) {
            matrix[i] = parseInt(matrix[i]) || 0
        }
        matrix = [
            [matrix[0], matrix[1], matrix[2]],
            [matrix[3], matrix[4], matrix[5]],
            [matrix[6], matrix[7], matrix[8]]
        ]
    }
    return matrix
}

function matrixMath(state) {
    let display = '<div>';
    let matrix = '';
    if(state.twoXtwo){
        matrix = [state.x2n1, state.x2n2, state.x2n3, state.x2n4];
        for (let i = 0; i < matrix.length; i++) {
            matrix[i] = parseInt(matrix[i]) || 0
        }
        matrix=[
            [matrix[0], matrix[1]],
            [matrix[2], matrix[3]]
        ]
        
    } else {
        matrix = [state.x3n1, state.x3n2, state.x3n3, state.x3n4, state.x3n5, state.x3n6, state.x3n7, state.x3n8
        , state.x3n9];
        for (let i = 0; i < matrix.length; i++) {
            matrix[i] = parseInt(matrix[i]) || 0
        }
        matrix = [
            [matrix[0], matrix[1], matrix[2]],
            [matrix[3], matrix[4], matrix[5]],
            [matrix[6], matrix[7], matrix[8]]
        ]
    }
    display += "Determinant: " + getDeterminant(matrix)
    display += "<br \>Inverse: " + matrixDisplay(getInverse(matrix))
    return display + '</div>'
}

function getDeterminant(matrix){
    if(matrix[0].length === 2){
        return ((matrix[0][0] * matrix[1][1]) - (matrix[0][1] * matrix[1][0]));
    } else if (matrix[0].length === 3) {
        return (
            (matrix[0][0]*getDeterminant([
                [matrix[1][1], matrix[1][2]],
                [matrix[2][1], matrix[2][2]]
            ])) +
            (matrix[0][1]*-1*getDeterminant([
                [matrix[1][0], matrix[1][2]],
                [matrix[2][0], matrix[2][2]]
            ])) +
            (matrix[0][2]*getDeterminant([
                [matrix[1][0], matrix[1][1]],
                [matrix[2][0], matrix[2][1]]
            ]))
        );
    }
}

function getInverse(matrix){
    let det = getDeterminant(matrix);
    if(det !== 0){
        det = 1/det
    }
    if(matrix.length === 2){
        matrix = [
            [matrix[1][1]*det, matrix[1][0]*-1*det],
            [matrix[0][1]*-1*det, matrix[0][0]*det]
        ];
    } else if(matrix.length === 3){
        matrix = [
            [
                getDeterminant([[matrix[1][1], matrix[1][2]],
                                [matrix[2][1], matrix[2][2]]])*det,
        
                getDeterminant([[matrix[1][0], matrix[1][2]],
                                [matrix[2][0], matrix[2][2]]])*det*-1,
        
                getDeterminant([[matrix[1][0], matrix[1][1]],
                                [matrix[2][0], matrix[2][1]]])*det],
            [
                getDeterminant([[matrix[0][1], matrix[0][2]],
                                [matrix[2][1], matrix[2][2]]])*det*-1,
        
                getDeterminant([[matrix[0][0], matrix[0][2]],
                                [matrix[2][0], matrix[2][2]]])*det,
        
                getDeterminant([[matrix[0][0], matrix[0][1]],
                                [matrix[2][0], matrix[2][1]]])*det*-1],
            [
                getDeterminant([[matrix[0][1], matrix[0][2]],
                                [matrix[1][1], matrix[1][2]]])*det,
        
                getDeterminant([[matrix[0][0], matrix[0][2]],
                                [matrix[1][0], matrix[1][2]]])*det*-1,
        
                getDeterminant([[matrix[0][0], matrix[0][1]],
                                [matrix[1][0], matrix[1][1]]])*det],
        ];
    }
    return transpose(matrix)
}

function transpose(matrix){
    if(matrix.length === 2){
        matrix = [
            [matrix[0][0], matrix[1][0]],
            [matrix[0][1], matrix[1][1]]
        ]
    } else if(matrix.length === 3){
        matrix = [
            [matrix[0][0], matrix[1][0], matrix[2][0]],
            [matrix[0][1], matrix[1][1], matrix[2][1]],
            [matrix[0][2], matrix[1][2], matrix[2][2]]
        ]
    }
    return matrix
}


function oldMatrices(savedMatrices) {
    let content = '<div class="multipleMatrixDisplay">';
    for(let i = 0; i < savedMatrices.length; i++){
        content += matrixDisplay(savedMatrices[i])
    }
    content +='</div>';
    return content
}


function matrixDisplay(Matrix) {
    let content = '<div class="matrixDisplay selectable">'
    for(let x = 0; x < Matrix.length; x++){
        content += '<div class=\'matrixRow\'>';
        for(let y = 0; y < Matrix[x].length; y++){
            content += '<div class=\'matrixColumn\'>';
            content += Matrix[x][y];
            content += '</div>';
        }
        content += '</div>';
    }
    content += '</div>';
    return content;
}

export default Math