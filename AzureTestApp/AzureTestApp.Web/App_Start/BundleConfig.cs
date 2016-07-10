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
                      "~/Content/css/plugins/bootstrap.css",
                      "~/Content/css/custom/core.css",
                      "~/Content/css/custom/utils.css",

                      "~/Content/css/custom/components/person-list.css",
                      "~/Content/css/custom/models/person/person-list-item.css",

                      "~/Content/css/custom/components/person-details-viewer.css",

                      "~/Content/css/custom/components/account-grubber.css"));

            bundles.Add(new ScriptBundle("~/bundles/ko")
                .Include("~/Scripts/knockout-{version}.js"));


            bundles.Add(new ScriptBundle("~/bundles/azureTestApp")
                .Include("~/Scripts/custom/models/person/basePersonModel.js")

                .Include("~/Scripts/custom/models/person/personListItem.js")
                .Include("~/Scripts/custom/components/person/personList.js")

                .Include("~/Scripts/custom/models/person/personDetails.js")
                .Include("~/Scripts/custom/components/person/personDetailsViewer.js")

                .Include("~/Scripts/custom/components/grub/accountGrubber.js")


                .Include("~/Scripts/custom/utils/customEventProcessor.js")
                .Include("~/Scripts/custom/utils/ajaxRequestProcessor.js")

                .Include("~/Scripts/custom/main.js"));
        }
    }
}
