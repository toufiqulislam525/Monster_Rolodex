import { Component } from "react";

class Card extends Component {

    render() {
        const {id,name,email} = this.props.monster;
        return (
            <div>
                <div className="card-container" key={id}>
                    <img alt={name} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                    <h2>{name}</h2>
                    <p>{email}</p>

                </div>

            </div>



        );

    }


}

export default Card;
