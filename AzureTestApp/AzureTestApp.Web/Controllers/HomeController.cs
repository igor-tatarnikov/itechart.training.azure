using System.Web.Mvc;

namespace AzureTestApp.Web.Controllers
{
    public class HomeController : Controller
    {
        #region Actions

        public ActionResult Index()
        {
            return View();
        }

        #endregion
    }
}