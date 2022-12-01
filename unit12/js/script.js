const apiURL = "./hoteldata.json";



const getHotels = async () => {
  try {
    const data = await fetch(apiURL);
    const hotels = await data.json();

    const cards = document.querySelector("#inventoryWrapper");

    hotels.forEach((hotel, index) => {
      const section = document.createElement("section");
      const figureWrapper = document.createElement("div");
      figureWrapper.className = `myCards`;
      const hotelInfo = document.createElement("div");
      hotelInfo.className = `hotelInfo`;

      // Figure Elements
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      const figcap = document.createElement("figcaption");
      img.src = hotel.photo;
      figcap.textContent = hotel.name;

      figure.appendChild(img);
      figure.appendChild(figcap);

      // Hotel Info
      // Span 1
      const spanOne = document.createElement("span");
      const ionIconCar = document.createElement("ion-icon");
      ionIconCar.setAttribute("name", "car-outline");
      const addressOne = document.createElement("p");
      const addressTwo = document.createElement("p");
      addressOne.textContent = hotel.address[0];
      addressTwo.textContent = hotel.address[1];
      spanOne.appendChild(ionIconCar);
      spanOne.appendChild(addressOne);
      spanOne.appendChild(addressTwo);

      // Span 2
      const spanTwo = document.createElement("span");
      const ionIconCall = document.createElement("ion-icon");
      ionIconCall.setAttribute("name", "call-outline");
      const phone = document.createElement("p");
      phone.textContent = hotel.phone;
      spanTwo.appendChild(ionIconCall);
      spanTwo.appendChild(phone);

      figureWrapper.appendChild(figure);
      hotelInfo.appendChild(spanOne);
      hotelInfo.appendChild(spanTwo);

      section.appendChild(figureWrapper);
      section.appendChild(hotelInfo);

      cards.appendChild(section);
    });
  } catch (error) {
    console.error(error);
  }
};

getHotels();
