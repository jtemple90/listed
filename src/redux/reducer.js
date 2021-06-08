import { ADD_LISTING, DELETE_LISTING, UPDATE_LISTING} from './actions'
import { listings } from './states'

export let reducer = (state = listings, action) => {
  let newListings;
  switch (action.type) {
    case ADD_LISTING:
      newListings = [...state];
      newListings.push(action.payload)
      return newListings;
    case DELETE_LISTING:
      newListings = [...state];
      newListings = newListings.filter(listing => listing.id !== action.payload)
      return newListings;
    case UPDATE_LISTING:
      newListings = [...state];
      let index = -1;
      for(let i = 0; i < newListings.length; i++) {
        index++;
        if (newListings[i].id === action.payload.id) {
          break
        }
      }
      if (index !== -1) {
        newListings[index] = action.payload;
        return newListings
      }
  }
  return state
}