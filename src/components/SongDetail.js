import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
    console.log(props);
    if (!props.selectedSong)
        return <div>Please select a song</div>

    return (
        <div>
            <h1>Details for: </h1>
            <p>
                Title: {props.selectedSong.title}<br />
                Duration: {props.selectedSong.duration}
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return (
        { selectedSong: state.selectedSong }
    )
};

export default connect(mapStateToProps)(SongDetail);