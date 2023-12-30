// import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  // token: "BQD1rJen_mVz2vkh-nvD1RTjy211Ag_IINiCpjw9N4P5-BbDz8Wd-g8lNFZ_nDwfGEa1a7cRYLRtNWbiIU3Io2VzKN_yKUozsBrNEtlLInD2_FYmMp4BCyHGA-RvU6tkTPw-HTp6SnsggZJf85K57zRTLBpkEB-imwi8hSBxFGh1wn4Q9yjobU4wA1-LRKrCyYIeKPn9hmm8c1NqsgI8",
};


const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
  
      case "SET_PLAYING":
        return {
          ...state,
          playing: action.playing,
        };
  
      case "SET_ITEM":
        return {
          ...state,
          item: action.item,
        };
  
      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };
  
      case "SET_TOP_ARTISTS":
        return {
          ...state,
          top_artists: action.top_artists,
        };
  
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };
  
      case "SET_SPOTIFY":
        return {
          ...state,
          spotify: action.spotify,
        };
  
      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };
      default:
        return state;
    }
  };
  
  export default reducer;