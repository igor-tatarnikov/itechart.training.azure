namespace AzureTestApp.Web.Models.Person
{
    public class PersonDetailsViewModel
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string AvatarUrl { get; set; }

        public int TotalTracksCount { get; set; }

        public int AnalyzedTracksCount { get; set; }

        public bool IsPersonHidden { get; set; }

        public bool IsPersonTrackListHidden { get; set; }
    }
}