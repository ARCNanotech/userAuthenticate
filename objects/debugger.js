// Javascript Source Code

if(!window.config) var  config {};
config.Debug {
    maxPopups: 5            /*use default setting of popup(or)error alerts before prompt
    to continue
    */
};

// Static type Debug object
var Debug = function()
{
    //**** Private properties and methods *****//

    var maxPopups  = window.config.Debug.maxPopups;
    var debugWindow;
    var popupCount = 0;
    var continuePopups = ture;

    //write an HTML message into debug output

}
