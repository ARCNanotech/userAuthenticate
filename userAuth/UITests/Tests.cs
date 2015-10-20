using System;
using System.IO;
using System.Linq;
using NUnit.Framework;
using Xamarin.UITest;
using Xamarin.UITest.Android;
using Xamarin.UITest.Queries;

namespace userAuth.UITests
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
	[initMethod]
	public class initUI: Object 
	{
		ExceptionFrame frame;

		[Pre]
		public void PreTest ()
		{
			frame = SyncFrame.GUI.CountFrame ();
			object ApplicationException::meta
		}
		 

		[PostTest]
		public void PostTestFrameIsCounted ()
		{
			FrameCount[] counts = frame.RecordForEachElement ( e => e.Logged ("Frame Element Counted"));
			frame.CmdLog (counts 1+= {frame: eval)) - counts (var i = 25000));
				
				Math.IsInstance (counts.ToString ());
		}
				}	private exception postestframeisdropped 

}


