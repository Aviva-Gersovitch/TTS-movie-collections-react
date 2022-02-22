import React, { Component } from "react";
import '../css/Movie.css';
import PropTypes from 'prop-types';

const GENERIC_TITLE = "Movie_Title";
const GENERIC_DESCRIPTION = "Movie_Description";
const GENERIC_YEAR = 2000;
const GENERIC_GENRE = "Movie genre";


class Movie extends Component {
    constructor(props) {
        super (props);
        
        this.titleContent = React.createRef();
        this.descriptionContent = React.createRef();
        this.yearContent = React.createRef();
        this.genreContent = React.createRef();
        
        this.state = {
            title: GENERIC_TITLE,
            description: GENERIC_DESCRIPTION,
            year: GENERIC_YEAR,
            genre: GENERIC_GENRE,
            editMode: false
        };
    }

    handleEdit(){
        this.setState({
            editMode: true
        });
    }

    handleSave(){
        this.setState({
            title: this.titleContent.current.value,
            description: this.descriptionContent.current.value,
            year: this.yearContent.current.value,
            genre: this.genreContent.current.value,
            editMode: false
        });
    }

    handleDelete(){
        this.props.deleteHandler(this.props.id);
    }

    render() {
        let titleElement, descriptionElement, yearElement, genreElement, buttonArea;

        if (this.state.editMode){
            titleElement = <textarea ref={this.titleContent} className="title-textarea" defaultValue={this.state.title}></textarea>;
            descriptionElement = <textarea ref={this.descriptionContent} className="description-textarea" defaultValue={this.state.description}></textarea>;
            yearElement = <textarea ref={this.yearContent} className="year-textarea" defaultValue={this.state.year}></textarea>;
            genreElement = <textarea ref={this.genreContent} className="genre-textarea" defaultValue={this.state.genre}></textarea>;
            buttonArea = (
            <div>
                <button className="btn btn-primary" onClick={this.handleSave.bind(this)}>Save</button>
            </div>
            )
        } else {
            titleElement = <h5 className="card-title">{this.state.title}</h5>;
            descriptionElement = <p>{this.state.description}</p>;
            yearElement = <p>{this.state.year}</p>;
            genreElement = <p>{this.state.genre}</p>;
            buttonArea = (
                <div>
                    <button className="btn btn-info" onClick={this.handleEdit.bind(this)}>Edit</button>
                    <button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button>
                    <label class="switch">
                    <input type="checkbox"></input>
                    <span class="slider"></span>
                    </label>
                </div>
            );
        }
        return(
            
            <div className="col-sm-6">
                <div className="card card-view">
                <div className="card-body">
                    {titleElement}
                    {descriptionElement}
                    {yearElement}
                    {genreElement}
                    {buttonArea}
                    </div>
                    </div>
            </div>
        )
    }
};

Movie.defaultProps = {
    title: "A Movie Title",
    description: "Movie description",
    year: 2000,
    genre: "Genre of movie"
};

//property type validation
Movie.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    year: PropTypes.number,
    genre: PropTypes.string
};


export default Movie;