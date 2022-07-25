/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const URL = "https://platzi-avo.vercel.app";

const appNote = document.querySelector("#app");

const formatPrice = price =>{

    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",

    }).format(price)
    return newPrice
}

async function fetchData(){
    const response = await fetch(`${URL}/api/avo`)
    const info = await response.json()

    const allData = [];

    info.data.forEach(item =>{

        //IMAGEN DEL AGUACATE
        const image =  document.createElement("img");
        image.src = `${URL}${item.image}`;
        image.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
        
        //TITLE OF THE AVOCADO
        const title = document.createElement("h2");
        title.textContent = item.name;
        title.className = "text-lg";
        
        //AVOCADO PRICE
        const price = document.createElement("div");
        price.textContent = formatPrice(item.price);
        price.className = 'text-gray-600 '

        // CONTENDOR DEL TITULO Y DEL PRECIO

        const priceAndTitle = document.createElement("div")
        priceAndTitle.className = "text-center md:text-left";
        priceAndTitle.appendChild(title);
        priceAndTitle.appendChild(price);

        //Create a Card

        const card = document.createElement("div");
        card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";

        card.append(image, priceAndTitle);

        // MAIN CONTAINER

        const containerMain = document.createElement("div");
        containerMain.appendChild(card);

        allData.push(containerMain)
    });

    appNote.append(...allData)
}

fetchData();