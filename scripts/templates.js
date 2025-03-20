function getListingItemTemplate(dataItem) {
    let title = dataItem.name;
    let description = dataItem.description;
    // let imgFile = title + ".jpg";
    let imgFile = 'logo-goninski.png';
    let imgUrl = "assets/img/" + imgFile;
    return `
        <div class="card-wrapper card-landscape">
            <div class="card-img-wrapper flex-col pos-relative">
                <img src="${imgUrl}" alt="" class="img-cover pos-absolute">
            </div>
            <div class="card-content-wrapper flex-col p-card">
                <a href="#" class="card-link"><h3 class="card-title">${title}</h3></a>
                <p class="card-teaser">${description}</p>
            </div>
        </div>
    `;
}


