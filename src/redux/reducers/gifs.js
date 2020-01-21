import { ADD_HATED_GIF, INCREMENT_CURR_GIF_INDEX} from "../actions/types"

const initialState = {
    hatedGifs: [],
    currGifIndex: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_HATED_GIF: {
      const {gif} = action.payload;
      let returnState = Object.assign({}, state, {
        hatedGifs: state.hatedGifs.concat(gif)
      })
      console.log(state)
      console.log(returnState)

      return returnState;
    }
    case INCREMENT_CURR_GIF_INDEX: {
      return Object.assign({}, state, {
        currGifIndex: state.currGifIndex + 1
      })
    };
    default:
        return state;
    }
}
