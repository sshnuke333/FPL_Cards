// toggles aria-expanded value on clicked target and sets display on it's control
export const expandTarget = (
    event,
    targetId,
    displayValue,
    attribute = 'aria-expanded'
) => {
    const targetElement = document.getElementById(targetId);
    const attributeStatus = event.target.getAttribute(attribute);
    attributeStatus === 'false'
        ? event.target.setAttribute(attribute, 'true')
        : event.target.setAttribute(attribute, 'false');
    attributeStatus === 'false'
        ? (targetElement.style.display = displayValue)
        : (targetElement.style.display = 'none');
};
// hides the element given it's id
export const hideDisplay = (targetId) => {
    const targetElement = document.getElementById(targetId);
    targetElement.style.display = 'none';
};
// toggles display of element given it's id
export const toggleDisplay = (targetId, displayValue) => {
    const targetElement = document.getElementById(targetId);
    targetElement.style.display === 'none'
        ? (targetElement.style.display = displayValue)
        : (targetElement.style.display = 'none');
};
