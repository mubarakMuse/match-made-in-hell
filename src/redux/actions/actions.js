import { ADD_HATED_GIF, INCREMENT_CURR_GIF_INDEX } from "./types";

export const addHatedGif = gif => ({
    type: ADD_HATED_GIF,
    payload: { gif}
});
export const incrementCurrGifIndex = () => ({
  type: INCREMENT_CURR_GIF_INDEX
});
