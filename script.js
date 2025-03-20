let dataObj = {};
let dataItems = [];
let dataItem = {};

function init() {
    loadTestData();
}

async function loadTestData() {
    let url = 'scripts/data.json';
    let response = await fetch(url);
    dataObj = await response.json();
    dataItems = await dataObj.food;
    renderListing();
}

function renderListing() {
    let listingRef = document.getElementById('listing');
    listingRef.innerHTML = '';
    for (let i = 0; i < dataItems.length; i++) {
        dataItem = dataItems[i];
        listingRef.innerHTML += getListingItemTemplate(dataItem);
    }
}

function firstLetterUppercase(word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
}