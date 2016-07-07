using System.Web.Optimization;

namespace AzureTestApp.Web
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/ko")
                .Include("~/Scripts/knockout-{version}.js"));


            bundles.Add(new ScriptBundle("~/bundles/azureTestApp")
                .Include("~/Scripts/custom/models/person/basePersonModel.js")

                .Include("~/Scripts/custom/models/person/personListItem.js")
                .Include("~/Scripts/custom/components/person/personList.js")

                .Include("~/Scripts/custom/models/person/personDetails.js")
                .Include("~/Scripts/custom/components/person/personDetailsViewer.js")


                .Include("~/Scripts/custom/utils/customEventProcessor.js")
                .Include("~/Scripts/custom/utils/ajaxRequestProcessor.js")

                .Include("~/Scripts/custom/main.js"));
        }
    }
}
