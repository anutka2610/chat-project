function showData(responce) {
  console.log(responce.message);
  
}

function getData() {
  let apiUrl = "http://35.228.45.65:8000/room_1/";
  axios.get(apiUrl).then(showData);
}
