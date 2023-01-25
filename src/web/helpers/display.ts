// toggles aria-expanded value on clicked target and sets display on it's control
import { SyntheticEvent } from 'react';

type DisplayValue = 'none' | 'flex' | 'block';

export const expandTarget = (
    event: SyntheticEvent,
    targetId: string,
    displayValue: DisplayValue,
    attribute = 'aria-expanded'
): void => {
    const targetElement = document.getElementById(targetId);
    const eventElement = event.target as HTMLElement;
    const attributeStatus = eventElement.getAttribute(attribute);
    eventElement.setAttribute(
        attribute,
        attributeStatus === 'false' ? 'true' : 'false'
    );
    if (targetElement)
        targetElement.style.display =
            attributeStatus === 'false' ? displayValue : 'none';
};

// hides the element given it's id
export const hideDisplay = (targetId: string): void => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) targetElement.style.display = 'none';
};

// toggles display of element given it's id
export const toggleDisplay = (
    targetId: string,
    displayValue: DisplayValue
): void => {
    const targetElement = document.getElementById(targetId);
    if (targetElement)
        targetElement.style.display =
            targetElement.style.display === 'none' ? displayValue : 'none';
};
