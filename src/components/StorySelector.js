import React from 'react';

const StorySelector = (props) => {
    if (!props.stories) return null;
        const options = props.stories.map (
            story => {
                return <option author={story.author} key={story.created_at_i} url={story.url}>
                    {story.title}
                </option>
            }
        ) 

    function handleChange(event) {
        props.onStorySelected(event.target.value);
    }

    return (
        <select id="story-selector" onChange={handleChange} defaultValue="default">
            <option disabled value="default">Choose a story!</option>
            {options}
        </select>
    )
}


export default StorySelector;