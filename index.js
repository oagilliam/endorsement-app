// SECTION 1: Variables For User's Entered Input 
const publishBtn = document.getElementById('publish-button');    
const inputField = document.getElementById('endorsement-field'); 
const fromField = document.getElementById("from-field");
const toField = document.getElementById('to-field');
const clearField = ''; // Removes previous text from input/textera fields

// SECTION 2: Connections to The Database (Google firebase)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://endorsements-app-78379-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const userInputInDB = ref(database, 'userInput');

// SECTION 3: Messages Added to User's Feed
const messagesFeedEl = document.getElementById('message-feed'); // Contains all the messeges in the feed
const warningMsg = document.getElementById('invalid-entry-warning');  // Shows warning if a field is left empty

publishBtn.addEventListener("click", function() {
    if (inputField.value.length === 0 || fromField.value.length === 0 || toField.value.length === 0) {
        warningMsg.textContent = 'Please add an entry to all fields!';
    } else {
        warningMsg.textContent = clearField
        let inputValue = inputField.value;
        let fromValue = fromField.value;
        let toValue = toField.value;

        let userInputValues = ["From: "+fromValue,"To: "+toValue,"Message: "+inputValue];
        push(userInputInDB, userInputValues )

        inputField.value = clearField;
        fromField.value = clearField;
        toField.value = clearField;
        
        messagesFeedEl.innerHTML += `
        <li>
            To ${toValue}<br><br>
            <span class="input-value-text">${inputValue}</span><br><br>
            From ${fromValue}
        </li>`
    } 
})
