function showData(response) {
  console.log(response);
}
const apiUrl = "http://35.228.45.65:8000/room_1/";

axios
  .get(apiUrl)
  .then(showData)
  .catch((error) => {
    console.error(error);
  });
