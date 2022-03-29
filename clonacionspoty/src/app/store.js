import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../feactures/UserSlice';
import tokenReducer from "../feactures/TokenSlice.js";
import playlistReducer from "../feactures/PlaylistSlice.js";

export default configureStore({
    reducer:{
        user: userReducer,
        token: tokenReducer,
        playlist: playlistReducer,
    }
})