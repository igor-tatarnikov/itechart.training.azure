var azureTestApp = window.azureTestApp || {};
azureTestApp.components = azureTestApp.components || {};
azureTestApp.components.grub = azureTestApp.components.grub || {};

azureTestApp.components.grub.AccountGrubber = function () {
    var self = this;

    //#region Fields
    var grubbingUrl = null;
    //#endregion

    //#region Properties
    self.accountId = ko.observable(null);
    self.isGrubModeOn = ko.observable(false);
    self.isBusy = ko.observable(false);
    //#endregion

    //#region Computed
    self.isAccountIdEmpty = ko.computed(function () {
        var value = self.accountId();
        return value === null || value === '';
    });
    //#endregion

    //#region Event handlers
    self.switchToGrubMode = function () {
        self.isGrubModeOn(true);
    };

    self.cancelGrubbing = function () {
        self.accountId(null);
        self.isGrubModeOn(false);
    };

    self.grub = function () {
        var accountToProcess = self.accountId();
        var requestObject = {
            method: 'POST',
            url: grubbingUrl,
            data: {
                personVkUserName: accountToProcess
            }
        }

        console.log('Adding grubbing request to the queue...');
        self.isBusy(true);

        return azureTestApp.utils.deferredAjax(requestObject)
               .done(function () { console.log('Adding grubbing request to the queue - Success'); })
               .fail(function () { console.log('Adding grubbing request to the queue - Failed'); })
               .always(function () {
                   self.isBusy(false);
                   self.accountId(null);
                   self.isGrubModeOn(false);
               });
    };
    //#endregion

    //#region Public functions
    self.init = function (options) {
        if (options) {
            grubbingUrl = options.grubbingUrl;
        }
    };
    //endregion
}