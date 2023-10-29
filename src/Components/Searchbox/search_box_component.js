import { Component } from "react";
import './search_box_styles.css';
class SearchBox extends Component{
    render(){
        const {className, placeholder , onChangeHandler} = this.props;
        return(
            <div>
                <input 
                className={`search-box ${className}`}
                type='search'
                placeholder={placeholder}
                onChange={onChangeHandler}

                >
                </input>

            </div>

        )

    }
}

export default SearchBox;