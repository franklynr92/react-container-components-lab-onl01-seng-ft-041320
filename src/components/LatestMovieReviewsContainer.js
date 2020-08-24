import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'AFkKAa6yKFvnLM0dSGGwdyRJDf156TUI';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?';
const END =  `&api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    
    state = {
        reviews: []
    }

    render(){
        return(
            <div className="latest-movie-reviews">
                <MovieReviews />
            </div>
        )
        
    }

    componentDidMount(){

        fetch({URL}+{END})
        .then((response) => response.json())
        .then((data) => {
            this.setState(
            { 
                reviews: data.map(review => ({title: review.results.display_title}))})
        });
    }
}

//display_title, link, byLine, headline, link, summary_short, opening_data, multimedia, mpaa_rating

export default LatestMovieReviewsContainer;