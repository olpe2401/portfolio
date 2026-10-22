function opToggleMenu(button) {
    const header = button.closest('.op-header');

    if (!header) return;

    const isOpen = header.classList.toggle('is-menu-open');

    button.setAttribute(
        'aria-expanded',
        isOpen ? 'true' : 'false'
    );

    button.setAttribute(
        'aria-label',
        isOpen ? 'Close menu' : 'Open menu'
    );
}