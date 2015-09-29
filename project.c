/*
 * project.c
 *
 *  Created on: Sep 27, 2015
 *      Author: RonThomas
 */
include stdio.h
using stdio.h

public class Dbg : Debug
{
	public Dbg ()
		{
			// The main debugger of your application
			CallStack = new ProcessReference {
				Process = new CodeMap {
					
				}
			}
		}
};
protected override OnClick ()
{
	//Handle clicks in your app
}

protected override OnStart ()
{
	// Handle when yor app starts 
}

protected override OnMouseHover () 
{
	// Handle when the Cursor is idle
}

protected override OnMouserLeave ()
{
	// Handle when the cursor moves
}




