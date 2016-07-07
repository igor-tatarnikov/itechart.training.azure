var azureTestApp = window.azureTestApp || {};
azureTestApp.components = azureTestApp.components || {};
azureTestApp.components.person = azureTestApp.components.person || {};

azureTestApp.components.person.PersonList = function () {
    var self = this;

    //#region Fields
    var getUrl = null;
    //#endregion

    //#region Properties
    self.isBusy = ko.observable(false);
    self.persons = ko.observableArray([]);
    //#endregion

    //#region Private functions
    var getPersonListData = function () {
        var requestObject = {
            url: getUrl
        };

        console.log('Loading person list data...');
        self.isBusy(true);

        return azureTestApp.utils.deferredAjax(requestObject)
               .done(function () { console.log('Loading person list data - Success'); })
               .fail(function () { console.log('Loading person list data - Failed'); })
               .always(function () { self.isBusy(false); });
    };

    var loadPersonListData = function (personListItems) {
        self.isBusy(true);

        self.persons.removeAll();

        if (personListItems) {
            ko.utils.arrayForEach(personListItems, function (personListItem) {
                var newItem = new azureTestApp.models.person.PersonListItem();
                newItem.loadData(personListItem);

                self.persons.push(newItem);
            });
        }

        self.isBusy(false);
    }
    //#endregion

    //#region Public functions
    self.init = function(options) {
        if (options) {
            getUrl = options.getUrl;
        }
    };

    self.reload = function () {
        getPersonListData()
            .done(loadPersonListData);
    };
    //#endregion
}