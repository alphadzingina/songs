import { combineReducers } from 'redux';

const songsReducer = () => {
    return (
        [
            { title: 'Chandelier', duration: '3:36' },
            { title: 'Big Girls Cry',  duration: '3:31' },
            { title: 'Burn the Pages', duration: '3:15' }, 
            { title: 'Eye of the Needle', duration: '4:08' }, 
            { title: 'Straigh For the Knife', duration: '3:31' }
        ]
    );
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;

};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});