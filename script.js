function setFeelingLucky() {
    // Add hidden input to act like "I'm Feeling Lucky" when the form is submitted
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'btnI';
    input.value = "I'm Feeling Lucky";
    document.forms[0].appendChild(input);
}