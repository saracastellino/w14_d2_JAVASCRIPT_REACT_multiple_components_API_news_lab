import React, { Component } from 'react';
import StorySelector from '../components/StorySelector';
import StoryDetail from '../components/StoryDetail';

class StoriesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: [],
            selectedStoryTitle: ""
        };
        this.handleStorySelected = this.handleStorySelected.bind(this);
    }

    componentDidMount() {
        const url = "https://hn.algolia.com/api/v1/search?tags=front_page"
        fetch(url)
        .then(res => res.json())
        .then(stories => this.setState({stories: stories.hits}))
        .catch(err => console.error(err));
    }

    handleStorySelected(title) {
        this.setState({ selectedStoryTitle: title })
    }
        
    render() {
        const selectedStory = this.state.stories.find(story => story.title === this.state.selectedStoryTitle)
        return (
            <>
            <StorySelector stories={this.state.stories} onStorySelected={this.handleStorySelected}></StorySelector>
            <StoryDetail story={selectedStory}/>
            </>
         
        )
    }
}


export default StoriesContainer;
