const apiURL = "./hoteldata.json";

fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    console.log(myList);

    let myImageTag = document.createElement("img");
    myImageTag.src = myList[0].photo;

    let myCaptionTag = document.createElement("figcaption");
    myCaptionTag.textContent = myList[0].name;

    let myFigureTag = document.createElement("figure");
    myFigureTag.appendChild(myImageTag);
    myFigureTag.appendChild(myCaptionTag);

    document.getElementById("myCards").appendChild(myImageTag);
  });
