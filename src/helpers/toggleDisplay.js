export const toggleDisplay = (
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
