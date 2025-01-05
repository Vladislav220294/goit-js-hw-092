const formFeedbackEl = document.querySelector('.feedback-form')
let formData = {
    email: "",
    message: ""
}
const fillFormField = () => {
    try {
        if (localStorage.length === 0) {
            return
        }
        const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));
        formData = formDataFromLS;
        for (const key in formDataFromLS) { formFeedbackEl.elements[key].value=formDataFromLS[key] }
    } catch (err) { console.log(err) };
     
};
fillFormField();
const onFormFieldchange = event => {
    const fieldValue = event.target.value.trim();
    const fieldName = event.target.name;
    formData[fieldName] = fieldValue;
    
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
const onFormSubmit = event => {
    event.preventDefault();
    if (formFeedbackEl.elements.email.value.trim() === '' || formFeedbackEl.elements.message.value.trim()==='') { alert('fill all fields please'); return}
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}
formFeedbackEl.addEventListener('input', onFormFieldchange);
formFeedbackEl.addEventListener('submit', onFormSubmit )