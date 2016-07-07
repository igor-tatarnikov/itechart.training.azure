var azureTestApp = window.azureTestApp || {};
azureTestApp.utils = azureTestApp.utils || {};

azureTestApp.utils.deferredAjax = function (jQueryAjaxObject) {
    var deferredObject = $.Deferred();

    if (jQueryAjaxObject && jQueryAjaxObject.url) {
        var method = jQueryAjaxObject.method ? jQueryAjaxObject.method : 'GET';
        var data = jQueryAjaxObject.data ? jQueryAjaxObject.data : {};
        var dataType = jQueryAjaxObject.dataType ? jQueryAjaxObject.dataType : 'json';
        var contentType = jQueryAjaxObject.contentType ? jQueryAjaxObject.contentType : 'application/x-www-form-urlencoded; charset=UTF-8';

        $.ajax({
            method: method,
            url: jQueryAjaxObject.url,
            data: data,
            success: function (response) {
                if (response && response.isSuccess) {
                    deferredObject.resolve(response.data);
                    return;
                }

                deferredObject.reject(response.errorMessages);
            },
            error: function (error) {
                deferredObject.reject([]);
            },
            dataType: dataType,
            contentType: contentType
        });
    } else {
        deferredObject.reject('Invalid request object specified');
    }

    return deferredObject.promise();
};

azureTestApp.utils.rejectedAjax = function () {
    return $.Deferred().reject([]).promise();
};

azureTestApp.utils.resolvedAjax = function () {
    return $.Deferred().resolve(null).promise();
};