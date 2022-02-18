import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
    render(){
        const { pokeList } = this.props;
        
        return (
            <div className="pokeList">
                {pokeList.map(elem => <Pokemon key={elem.id} poke={elem} />)}
            </div>
        )
    }
}

export default Pokedex;