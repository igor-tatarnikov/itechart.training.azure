using System.Net;
using System.Web.Mvc;

namespace AzureTestApp.Web.ActionResults
{
    public class HttpBadRequestResult : HttpStatusCodeResult
    {
        public HttpBadRequestResult()
            : base(HttpStatusCode.BadRequest)
        {
        }

        public HttpBadRequestResult(string message)
            : base(HttpStatusCode.BadRequest, message)
        {
        }
    }
}