import React from 'react';
// COMPONENT 
class SearchBar extends React.Component{
// STATE INITIALIZATION
    state = {term:''} 
// HELPER FUNCTION
    onFormSubmit=(event)=>{
        event.preventDefault()
        this.props.inputText(this.state.term)
    }
// RENDERING FUNCTION
    render(){
        return (
        <div className="ui segment">
        <form  onSubmit={this.onFormSubmit} className="ui form">
                <div className="ui field"> 
                <label>IMAGE SELECTOR: </label>
                    <input 
                    value={this.state.term}
                    type='text' 
                    onChange={(e)=>this.setState({term: e.target.value})}/>
                </div>
            </form>
        </div>
        )
    }
}

export default SearchBar;