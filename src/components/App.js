import React from 'react'
import SearchBar from './SearchBar'
import unsplash from '../api/unsplash'
import ImageList from './ImageList'

class App extends React.Component{
//STATE INITIALIZATION
    state={image:[]}
//HELPER FUNCTION
    onFormSubmit =async(term) => {
    //CALL TO UNSPLASH API
        const response = await unsplash.get(`/search/photos?query=${term}&page=2`)
        this.setState({image:response.data.results})
        console.log(this.state.image)
    }
//RENDERING FUNCTION
    render(){
        return( 
        <div className='ui-container' style={{marginTop:'10px'}}>
            <SearchBar inputText = {this.onFormSubmit}/>
            <ImageList imageList={this.state.image}/>
        </div>
        )
    }
}

export default App;