const users = [
    { name: "Alex", email: "alex@example.com", gender: "Male", age: 25, height: "5 feet 9 inches", weight: 75, img: "user_profile_image.svg" },
    { name: "Sarah", email: "sarah@example.com", gender: "Female", age: 22, height: "5 feet 5 inches", weight: 60, img: "user_profile_image.svg" },
    { name: "John", email: "john@example.com", gender: "Male", age: 30, height: "6 feet 1 inch", weight: 85, img: "user_profile_image.svg" },
    { name: "Alex", email: "alex@example.com", gender: "Male", age: 25, height: "5 feet 9 inches", weight: 75, img: "user_profile_image.svg" },
    { name: "Sarah", email: "sarah@example.com", gender: "Female", age: 22, height: "5 feet 5 inches", weight: 60, img: "user_profile_image.svg" },
    { name: "John", email: "john@example.com", gender: "Male", age: 30, height: "6 feet 1 inch", weight: 85, img: "user_profile_image.svg" },
    { name: "Alex", email: "alex@example.com", gender: "Male", age: 25, height: "5 feet 9 inches", weight: 75, img: "user_profile_image.svg" },
    { name: "Sarah", email: "sarah@example.com", gender: "Female", age: 22, height: "5 feet 5 inches", weight: 60, img: "user_profile_image.svg" },
    { name: "John", email: "john@example.com", gender: "Male", age: 30, height: "6 feet 1 inch", weight: 85, img: "user_profile_image.svg" },
    { name: "Alex", email: "alex@example.com", gender: "Male", age: 25, height: "5 feet 9 inches", weight: 75, img: "user_profile_image.svg" },
    { name: "Sarah", email: "sarah@example.com", gender: "Female", age: 22, height: "5 feet 5 inches", weight: 60, img: "user_profile_image.svg" },
    { name: "John", email: "john@example.com", gender: "Male", age: 30, height: "6 feet 1 inch", weight: 85, img: "user_profile_image.svg" },
    { name: "Alex", email: "alex@example.com", gender: "Male", age: 25, height: "5 feet 9 inches", weight: 75, img: "user_profile_image.svg" },
    { name: "Sarah", email: "sarah@example.com", gender: "Female", age: 22, height: "5 feet 5 inches", weight: 60, img: "user_profile_image.svg" },
    { name: "John", email: "john@example.com", gender: "Male", age: 30, height: "6 feet 1 inch", weight: 85, img: "user_profile_image.svg" },
    { name: "Alex", email: "alex@example.com", gender: "Male", age: 25, height: "5 feet 9 inches", weight: 75, img: "user_profile_image.svg" },
    { name: "Sarah", email: "sarah@example.com", gender: "Female", age: 22, height: "5 feet 5 inches", weight: 60, img: "user_profile_image.svg" },
    { name: "John", email: "john@example.com", gender: "Male", age: 30, height: "6 feet 1 inch", weight: 85, img: "user_profile_image.svg" }
];

// Table body select karna
const tableBody = document.getElementById("table-body");

// Function to populate table dynamically
function populateTable() {
    users.forEach(user => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>
                <div class="name-and-picture-container">
                    <img src='static/images/user_profile_image.svg'  alt="">
                    <span>${user.name}</span>
                </div>
            </td>
            <td><span>${user.email}</span></td>
            <td><span>${user.gender}</span></td>
            <td><span>${user.age}</span></td>
            <td><span>${user.height}</span></td>
            <td><span>${user.weight}</span></td>
            <td>
                <div class="edit-and-delete-container">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#editNotificationModal">
                         <img src="static/images/edit_icon.svg" alt="">
                    </a>
                   
                    <a href="#" data-bs-toggle="modal" data-bs-target="#deleteModal">
                        <img src="static/images/delete_icon.svg" alt="">
                    </a>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Call function to populate table
populateTable();

// Edit function
// function editUser(name) {
//     alert(`Edit user: ${name}`);
// }

// Delete function
// function deleteUser(element) {
//     element.closest("tr").remove();
// }

let startDate = flatpickr('#notification-date', {
    // dateFormat: "Z",
    altInput: true,
    altFormat: "d-m-Y",
    // maxDate: "today",
    onChange: function(selectedDates, dateStr, instance) {
        // selectedStartDate = selectedDates[0] ? selectedDates[0] : null;
    },
});


// noCalendar: true,
// enableTime: true,
// dateFormat: 'h:i K'

let startTime = flatpickr('#notification-time', {
    // dateFormat: "Z",
    noCalendar: true,
    enableTime: true,
    dateFormat: 'h:i K',
    // altInput: true,
    // altFormat: "d-m-Y",
    // maxDate: "today",
});

// Following is the logic for delete modal to show the customize data
const modalHeading = document.querySelector("#delete-modal-heading");
modalHeading.innerText = "Are you Sure?";
const modalDescription = document.querySelector("#delete-modal-description")
modalDescription.innerText = "Are you sure you want to delete this notification? All associated data will be lost."
