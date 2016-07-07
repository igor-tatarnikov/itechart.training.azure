using AzureTestApp.Web.ActionResults;
using AzureTestApp.Web.Models.LogEvent;
using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace AzureTestApp.Web.Controllers
{
    public class EventController : Controller
    {
        public ActionResult GetEventList()
        {
            try
            {
                var eventList = new List<LogEventListViewModel>();

                eventList.Add(new LogEventListViewModel
                {
                    Date = DateTime.Now,
                    Description = "First person added to grubber queue",
                    TypeName = "Info"
                });

                eventList.Add(new LogEventListViewModel
                {
                    Date = DateTime.Now,
                    Description = "Person account is locked",
                    TypeName = "Warning"
                });

                return new SuccessJsonResult(eventList);
            }
            catch (Exception ex)
            {
                //TODO: log
                return new HttpBadRequestResult();
            }
        }
    }
}