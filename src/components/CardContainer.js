import React from 'react';
import Card from './Card';
import Search from './Search';
import { getBreeds, searchBreeds } from '../services/catApi';

class CardContainer extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            cats: [],
            isFetch: true
        }
    }

    async componentDidMount(){
        const responseJson = await getBreeds();
        this.setState({ cats: responseJson, isFetch: false });
    }

    handleSearch = async (search) => {
        const responseJson = await searchBreeds(search);
        this.setState({ cats: responseJson });
    }

    render(){
        const { isFetch, cats } = this.state;

        return(
            <React.Fragment>
                <Search handleSearch={this.handleSearch}/>

                {
                  isFetch && 'Loading kittens...'
                }

                {
                  (!isFetch && !cats.length) && 'No kittys for you :('
                }

                <section className="card-container">
                    {
                        cats.map((cats) => <Card
                        key={cats.id}
                        name={cats.name}
                        description={cats.description}
                        origin={cats.origin}
                        life={cats.life_span}
                        temperament={cats.temperament}
                        weight={cats.weight.imperial}
                        />)
                    }
                </section>
            </React.Fragment>
        );
    }
}

export default CardContainer;