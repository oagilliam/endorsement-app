// Connections to the database (Google firebase)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://endorsements-app-78379-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const endorsementsInDB = ref(database, "endorsements");

const publishBtn = document.getElementById('publish-button');
const inputField = document.getElementById('endorsement-field');


publishBtn.addEventListener("click", function() {
    let inputValue = inputField.value;
    push(endorsementsInDB, inputValue);




})