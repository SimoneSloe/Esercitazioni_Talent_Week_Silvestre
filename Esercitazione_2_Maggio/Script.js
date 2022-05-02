
// Funzione che resetta l'intero form
function reset_all() {
    document.getElementById("dati_personali").reset();
}

// Funzione che valida i valori inseriti nel form
function check_elements() {

    // Variabili
    let sur_value = document.getElementById("surname").value;
    let nam_value = document.getElementById("name").value;
    let matr_value = document.getElementById("matricola").value;
    let em_value = document.getElementById("email").value;
    let tel_value = document.getElementById("telefono").value;

    // Espressioni regolari
    let email_regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let phone_regex = /[0-9]+/;


    // Controlli

    // Controllo se il campo cognome è vuoto
    if (sur_value == null || sur_value == '') {
        alert("Il cognome e' un campo obbligatorio");
    } else if (sur_value.length > 40) {  //controllo se il cognome supera la grandezza massima consentita
        alert("Superato il numero massimo di caratteri per il campo Cognome");
    }

    // Controllo se il campo nome è vuoto
    if (nam_value == null || nam_value == '') {
        alert("Il nome e' un campo obbligatorio");
    } else if (nam_value.length > 30) {  //controllo se il nome supera la grandezza massima consentita
        alert("Superato il numero massimo di caratteri per il campo Nome");
    }

    // Controllo se il campo matricola è vuoto
    if (matr_value == null || matr_value == '') {
        alert("La matricola e' un campo obbligatorio");
    } else if (matr_value.length > 12) {  //controllo se la matricola supera la grandezza massima consentita
        alert("Superato il numero massimo di caratteri per il campo Matricola");
    }

    // Sfruttando una regex controllo se il campo email è compilato correttamente
    let emailResult = email_regex.test(em_value);
    if (!emailResult) {
        alert("L'email deve essere in un formato valido");
    } else if (em_value.length > 30) {  //controllo se l'email supera la grandezza massima consentita
        alert("Superato il numero massimo di caratteri per il campo Email");
    }

    // Sfruttando una regex controllo se il campo telefono è composto da soli numeri
    let phoneResult = phone_regex.test(tel_value);
    if (!phoneResult) {
        alert("Il campo Telefono puo' contenere soltanto numeri");
    } else if (tel_value.length > 15) {  //controllo se il telefono supera la grandezza massima consentita
        alert("Superato il numero massimo di caratteri per il campo Telefono");
    }


}



// Main

document.getElementById('reset').addEventListener('click', reset_all);

document.getElementById('invio').addEventListener('click', check_elements);

