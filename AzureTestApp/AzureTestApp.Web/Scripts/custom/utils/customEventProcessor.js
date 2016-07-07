var azureTestApp = window.azureTestApp || {};
azureTestApp.utils = azureTestApp.utils || {};

azureTestApp.utils.raiseCustomEvent = function (eventName, eventDetailsObject) {
    var event = document.createEvent("CustomEvent");
    event.initCustomEvent(eventName, false, true, eventDetailsObject);
    document.dispatchEvent(event);
};