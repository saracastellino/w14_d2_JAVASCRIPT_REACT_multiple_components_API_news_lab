import React from 'react';

const StoryDetail = (props) => {
    if (!props.story) return null;
    return (
        <>
        <h1>{props.story.title}</h1>
        <h3>Article by: {props.story.author}</h3>
        <h4><a href={props.story.url}>Read full article!</a></h4>
        </>

    )
}

export default StoryDetail;
