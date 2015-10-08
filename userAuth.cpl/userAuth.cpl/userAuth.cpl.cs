using System;

using Xamarin.Forms;

namespace userAuth.cpl
{
	public class App : Application
	{
		public App ()
		{
			// The root page of your application
			MainPage = new ContentPage {
				Content = new StackLayout {
					VerticalOptions = LayoutOptions.Center,
					Children = {
						new Label {
							XAlign = TextAlignment.Center,
							Text = "Welcome to Xamarin Forms!"
						}
					}
				}
			};

		}

		protected override void OnStart ()
		{
			// Handle when your app starts
		}

		protected override void OnSleep ()
		{
			// Handle when your app sleeps
		}

		protected override void OnResume ()
		{
			// Handle when your app resumes
		}

		protected void OnClick ()
		{
			// Handle click send to your app
		}

		public class StackOrientationMod : Element.Constraint/|\(InputPr)
		{
			// Modify the stack orient command
		}
		public class ClickRef : IViewController
		{
			public ClickRef ()
			{
				IVisualElementController = Element.ContentPage()
				{
					Attribute.ReferenceEquals}:(bool){
					object OnClick();
					object OnRelease();
					}
			} Setter. StackOrientation from object(values.ascending, value)
}

