export const ADD_LISTING = "ADD_LISTING"
export const DELETE_LISTING = "DELETE_LISTING"
export const UPDATE_LISTING = "UPDATE_LISTING"

export function addListing(listing) {
  return {
    type: ADD_LISTING,
    payload: listing
  }
}

export function deleteListing(listingId) {
  return {
    type: DELETE_LISTING,
    payload: listingId
  }
}

export function updateListing(listing) {
  return {
    type: UPDATE_LISTING,
    payload: listing
  }
}