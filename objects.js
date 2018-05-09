var playlist = {Adele: "Someone like you"}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { [artistName]: songTitle })
}
