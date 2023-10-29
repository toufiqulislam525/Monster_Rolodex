import { Component } from "react";
import './card_list_styles.css'
import Card from '../Card/card_component'

class CardList extends Component{

    render(){
        console.log('render from cardlist')
        const {monsters} = this.props;

        
        return(
            <div className="card-list">
                {
                    monsters.map((monster)=>
                    {
                        
                        return(
                        
                        <Card card_item={monster}/>                       
                        
                        
                        )
                    })
                }
            </div>
        )
    }
    

}

export default CardList;
