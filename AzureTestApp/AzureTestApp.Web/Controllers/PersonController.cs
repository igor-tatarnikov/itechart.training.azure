using AzureTestApp.Web.ActionResults;
using AzureTestApp.Web.Models.Person;
using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace AzureTestApp.Web.Controllers
{
    public class PersonController : Controller
    {
        public ActionResult GetPersonList()
        {
            try
            {
                var personList = new List<PersonListViewModel>();

                personList.Add(new PersonListViewModel
                {
                    FirstName = "Eugene",
                    LastName = "Ivanov",
                    AvatarUrl = null
                });

                personList.Add(new PersonListViewModel
                {
                    FirstName = "Kate",
                    LastName = "Moor",
                    AvatarUrl = null
                });

                personList.Add(new PersonListViewModel
                {
                    FirstName = "Eugene",
                    LastName = "Ivanov",
                    AvatarUrl = null
                });

                personList.Add(new PersonListViewModel
                {
                    FirstName = "Kate",
                    LastName = "Moor",
                    AvatarUrl = null
                });

                personList.Add(new PersonListViewModel
                {
                    FirstName = "Eugene",
                    LastName = "Ivanov",
                    AvatarUrl = null
                });

                personList.Add(new PersonListViewModel
                {
                    FirstName = "Kate",
                    LastName = "Moor",
                    AvatarUrl = null
                });

                return new SuccessJsonResult(personList);
            }
            catch (Exception ex)
            {
                //TODO: log
                return new HttpBadRequestResult();
            }
        }

        public ActionResult GetPersonDetails()
        {
            try
            {
                var personDetails = new PersonDetailsViewModel
                {
                    FirstName = "Eugene",
                    LastName = "Ivanov",
                    AvatarUrl = null,
                    TotalTracksCount = 1000,
                    AnalyzedTracksCount = 39
                };

                return new SuccessJsonResult(personDetails);
            }
            catch (Exception ex)
            {
                //TODO: log
                return new HttpBadRequestResult();
            }
        }

        [HttpPost]
        public ActionResult AnalysePerson(string personVkUserName)
        {
            try
            {
                //TODO: put message to Grubber queue

                return new SuccessJsonResult();
            }
            catch (Exception ex)
            {
                //TODO: log
                return new HttpBadRequestResult();
            }
        }
    }
}