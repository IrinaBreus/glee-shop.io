const copiryghtDate = (dateField) => {
    const txt = document.querySelector(dateField);
    const date = new Date().getFullYear();
    
    txt.innerHTML = `${date}`;
}

export default copiryghtDate;