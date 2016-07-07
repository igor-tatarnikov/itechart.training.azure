using System;

namespace AzureTestApp.Web.Models.LogEvent
{
    public class LogEventListViewModel
    {
        public DateTime Date { get; set; }

        public string TypeName { get; set; }

        public string Description { get; set; }


        public string DateString
        {
            get
            {
                return Date.ToShortTimeString();
            }
        }
    }
}