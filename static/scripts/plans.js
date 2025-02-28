cards = [
    {cardDescriptionTitle:'30 Days Plan', planDescription:'Lose body fat and become more defined'},
    {cardDescriptionTitle:'30 Days Plan', planDescription:'Lose body fat and become more defined'},
    {cardDescriptionTitle:'30 Days Plan', planDescription:'Lose body fat and become more defined'},
    {cardDescriptionTitle:'30 Days Plan', planDescription:'Lose body fat and become more defined'},
    {cardDescriptionTitle:'30 Days Plan', planDescription:'Lose body fat and become more defined'},
    {cardDescriptionTitle:'30 Days Plan', planDescription:'Lose body fat and become more defined'},
    {cardDescriptionTitle:'30 Days Plan', planDescription:'Lose body fat and become more defined'},
    {cardDescriptionTitle:'30 Days Plan', planDescription:'Lose body fat and become more defined'},
    {cardDescriptionTitle:'30 Days Plan', planDescription:'Lose body fat and become more defined'},
    {cardDescriptionTitle:'30 Days Plan', planDescription:'Lose body fat and become more defined'},
    {cardDescriptionTitle:'30 Days Plan', planDescription:'Lose body fat and become more defined'},
    {cardDescriptionTitle:'30 Days Plan', planDescription:'Lose body fat and become more defined'},
]
const gridContainer = document.querySelector(".grid-container");
function populateGridContainer(){
    cards.forEach(card => {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add("card-container");
        cardContainer.innerHTML =`<div class="card-content-container">
                    <div class="card-image-container">
                        <img class="card-image" src="static/images/woman-foot-exercise.svg" alt="">
                        <div class="overlay-container"></div>
                    </div>
                    <div class="card-description-container">
                        <p class="card-description-title">${card.cardDescriptionTitle}</p>
                        <p class="plan-description">${card.planDescription}</p>
                    </div>
                    <div class="edit-delete-container">
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>
                    </div>
                </div>`;
        gridContainer.appendChild(cardContainer);
    })
}
populateGridContainer();
// Following is the logic for delete modal to show the customize data
const modalHeading = document.querySelector("#delete-modal-heading");
modalHeading.innerText = "Are you Sure?";
const modalDescription = document.querySelector("#delete-modal-description")
modalDescription.innerText = "Are you sure you want to delete this plan? This wont be recovered again."
