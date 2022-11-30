// import

const apiURL = "./hoteldata.json";

fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    console.log(myList);
  });
