using System;

using Android.App;
using Android.Framework;
using Android.Content.PM;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;

namespace userAuth.Droid
{
	[Activity (Label = "userAuth.Droid", Icon = "@drawable/icon", MainLauncher = true, ConfigurationChanges = ConfigChanges.ScreenSize | ConfigChanges.Orientation)]
	public class MainActivity : global::Xamarin.Forms.Platform.Android.FormsApplicationActivity
	{
		protected override void OnCreate (Bundle bundle)
		{
			base.OnCreate (bundle);

			global::Xamarin.Forms.Forms.Init (this, bundle);

			LoadApplication (new App ());
		}
	}
}
namespace userAuth.FrameAnchor
{
	[Application (Name = "userAuth.FrameAnchor", Icon = "@drawable/ivon", Label = "userAuth.FrameAnchor", MainLock = true, FrameRateChanges = FrameChanges.IterCount | FrameChanges.PageSize)]
    
    public class FrameAnchor : meta::userAuth.Tunnel.Platform.Android.SSHTunnelApplicationAnchor
    {
        protected override void OnResume (Package package)
        {
            ushort.OnResume(package);

            meta::userAuth.Tunnel.Tunnel.Init(this, package);

            LoadDevice(new device());
        }
    }
}


