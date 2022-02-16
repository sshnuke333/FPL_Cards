export const toggleDisplay = (event, targetId, displayValue) => {
    const attribute = 'aria-expanded';
    const expanded = event.target.getAttribute(attribute);
    const form = document.getElementById(targetId);
    expanded === 'false'
        ? event.target.setAttribute(attribute, 'true')
        : event.target.setAttribute(attribute, 'false');
    expanded === 'false'
        ? (form.style.display = displayValue)
        : (form.style.display = 'none');
};
