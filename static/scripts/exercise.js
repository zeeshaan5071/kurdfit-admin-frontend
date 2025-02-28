const cards = [
    {learnerCategory:'Beginner', cardDescriptionTitle: 'Push Up', genderDescription:'Male', timeDescription:'15 minutes'},
    {learnerCategory:'Beginner', cardDescriptionTitle: 'Push Up', genderDescription:'Male', timeDescription:'15 minutes'},
    {learnerCategory:'Beginner', cardDescriptionTitle: 'Push Up', genderDescription:'Male', timeDescription:'15 minutes'},
    {learnerCategory:'Beginner', cardDescriptionTitle: 'Push Up', genderDescription:'Male', timeDescription:'15 minutes'},
    {learnerCategory:'Beginner', cardDescriptionTitle: 'Push Up', genderDescription:'Male', timeDescription:'15 minutes'},
    {learnerCategory:'Beginner', cardDescriptionTitle: 'Push Up', genderDescription:'Male', timeDescription:'15 minutes'},
    {learnerCategory:'Beginner', cardDescriptionTitle: 'Push Up', genderDescription:'Male', timeDescription:'15 minutes'},
    {learnerCategory:'Beginner', cardDescriptionTitle: 'Push Up', genderDescription:'Male', timeDescription:'15 minutes'},
    {learnerCategory:'Beginner', cardDescriptionTitle: 'Push Up', genderDescription:'Male', timeDescription:'15 minutes'},
    {learnerCategory:'Beginner', cardDescriptionTitle: 'Push Up', genderDescription:'Male', timeDescription:'15 minutes'},
    {learnerCategory:'Beginner', cardDescriptionTitle: 'Push Up', genderDescription:'Male', timeDescription:'15 minutes'},
    {learnerCategory:'Beginner', cardDescriptionTitle: 'Push Up', genderDescription:'Male', timeDescription:'15 minutes'},
    
];
const gridContainer = document.querySelector(".grid-container");
function populateGridContainer(){
    cards.forEach(card => {
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card-container");
        cardContainer.innerHTML = `<div class="card-content-container">
                    <div class="card-image-container">
                        <img class="card-image" src="static/images/woman-foot-exercise.svg" alt="">
                        <div class="overlay-container"></div>
                        <div class="learner-category-container"><span>${card.learnerCategory}</span></div>
                    </div>
                    <div class="card-description-container">
                        <p class="card-description-title">${card.cardDescriptionTitle}</p>
                        <div class="exercise-description-container">
                            <div class="gender-info-container">
                                <img src="static/images/male_icon.svg" alt="">
                                <span class="gender-description">${card.genderDescription}</span>
                            </div>
                            <div class="time-info-container">
                                <img src="static/images/clock_icon.svg" alt="">
                                <span class="time-description">${card.timeDescription}</span>
                            </div>
                        </div>
                    </div>
                    <div class="edit-delete-container">
                        <button class="edit-btn" data-bs-toggle="modal" data-bs-target="#editFitnessGoalModal">Edit</button>
                        <button class="delete-btn" data-bs-toggle="modal" data-bs-target="#deleteModal" >Delete</button>
                    </div>
                </div>`;
        gridContainer.appendChild(cardContainer)
    })
}
populateGridContainer();
// Following is the logic for delete modal to show the customize data
const modalHeading = document.querySelector("#delete-modal-heading");
modalHeading.innerText = "Are you Sure?";
const modalDescription = document.querySelector("#delete-modal-description");
modalDescription.innerText = "Are you sure you want to delete this template? All associated data will be lost";
