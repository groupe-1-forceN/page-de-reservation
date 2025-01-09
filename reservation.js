// Description: JavaScript file for reservation.html
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');
    const nameInput = document.getElementById('name');
    const telInput = document.getElementById('tel');
    const personsSelect = document.getElementById('persons');
    const submitButton = document.getElementById('button');

function submitForm() {
    const date = dateInput.value;
    const time = timeInput.value;
    const name = nameInput.value;
    const tel = telInput.value;
    const persons = personsSelect.value;

    if (date === '' || time === '' || name === '' || tel === '' || persons === '') {
        alert('votre soumission est incomplète');
    } else {
        alert('Reservation soumise');
    }
}
submitButton.addEventListener('click', submitForm);


   