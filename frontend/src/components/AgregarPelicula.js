import React, { Component } from 'react';
import Navigation from './Navigation';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class AgregarPelicula extends Component {
    
    constructor() {
        super();
        this.state={
        	genres: [],
        	title: ''
        };
    }

    componentDidMount() {
	    fetch("http://localhost:3001/genres",{method: 'GET'})
	      .then(response => response.json())
	      .then(genres => this.setState({ genres }));
	};

	titleChanged = (event) => {
    	this.setState({title: event.target.value});
  	}

    render() {
    	const genres = this.state.genres.map((genre,i) => {
    		return (
                <option key={genre.id} value={genre.id}>{genre.name}</option>
            )
    	}) 
        return (
        	<React.Fragment>
	            <Navigation></Navigation>
	            <Container>
		            <Form>
						<Form.Group className="mb-3" controlId="formBasicTitle">
						    <Form.Label>Title</Form.Label>
						    <Form.Control type="text" placeholder="Tonari no Totoro" onChange={this.titleChanged} />
					  	</Form.Group>

					  	<Form.Row>
						  	<Col>
							  	<Form.Group className="mb-3" controlId="formBasicRating">
								    <Form.Label>Rating</Form.Label>
								    <Form.Control type="number" placeholder="5" />
							  	</Form.Group>
							</Col>
							<Col>
							  	<Form.Group className="mb-3" controlId="formBasicAwards">
								    <Form.Label>Awards</Form.Label>
								    <Form.Control type="number" placeholder="2" />
							  	</Form.Group>
							</Col>
					  	</Form.Row>
						<Form.Group className="mb-3" controlId="formBasicReleaseDate">
						    <Form.Label>Release Date</Form.Label>
						    <Form.Control type="date" />
					  	</Form.Group>

					  	<Form.Group className="mb-3" controlId="formBasicLength">
						    <Form.Label>Length</Form.Label>
						    <Form.Control type="number" placeholder="5" />
					  	</Form.Group>

					  	<Form.Control as="select">
						    <option>Select Genre</option>
						    {genres}
						</Form.Control>

					  	<Button variant="success" type="submit" style={{margin:"20px 20px"}}>Agregar</Button>
		            	<Button href={`/listado-peliculas`} variant="primary">Listado de Películas</Button>
					</Form>
				</Container>
			</React.Fragment>
        );
    }
}

export default AgregarPelicula;
