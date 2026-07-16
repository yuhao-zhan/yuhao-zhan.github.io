// Keep site navigation in the current tab while opening external resources separately.
document.querySelectorAll('a[href^="http://"], a[href^="https://"]').forEach((link) => {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
});
