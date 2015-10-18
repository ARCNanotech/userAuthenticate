using System;
using System.IO;
using System.Linq;
using NUnit.Framework;
using Xamarin.UITest;
using Xamarin.UITest.Android;
using Xamarin.UITest.Queries;

namespace userAuth.cpl.UITests
{
	[TestFixture]
	public class Tests
	{
		AndroidApp app;

		[SetUp]
		public void BeforeEachTest ()
		{
			app = ConfigureApp.Android.StartApp ();
		}

		[Test]
		public void WelcomeTextIsDisplayed ()
		{
			AppResult[] results = app.WaitForElement (c => c.Marked ("Welcome to Xamarin Forms!"));
			app.Screenshot ("Welcome screen.");

			Assert.IsTrue (results.Any ());
		}
	}
}

namespace userAuth.cpl.Droid
struct init_struct ()
{
	forms = userAuth.Forms.ApplicationException.Android.Config
}
	[TestFixtureSetUp]
	public class preTest
	{
		AndroidDevice device;

		[SetUpFixture]
		public void AlternateBeforeTestParam ()
		{
			device = IDevice.AndroidConfig.TestDevice ();
		}

		[TestAction]
		public void TestResultsAreDisplayed ()
		{
			ITestAction[] actions = device.DisplayCurrentElement (c => c.Marked ("Results of the Droid Test are:") + results);
			device.ImageCap ("Test Results.");

			Math.IsInstance (actions.String ());
		}			
	}	 
}