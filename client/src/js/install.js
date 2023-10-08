const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // store event for later
    window.deferredPrompt = event;
    // make install button visible if app has not been installed yet
    butInstall.classList.toggle('hidden', false);
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // retrieve old events
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }

    // show prompt
    promptEvent.prompt();

    // reset deferredPrompt so it can be used again
    window.deferredPrompt = null;

    // hide install button after clicking it
    butInstall.classList.toggle('hidden', true);
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // reset deferredPrompt
    window.deferredPrompt = null;
});
