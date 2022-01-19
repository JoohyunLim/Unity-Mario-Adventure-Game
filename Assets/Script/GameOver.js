#pragma strict

var labelStyle : GUIStyle;
var labelStyle2 : GUIStyle;
 

function Start(){
 	 
}
function Update(){
	if(Input.GetButtonDown("Jump"))
	{
		Application.LoadLevel("countdown");
	}
}
function OnGUI()
{
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	GUI.Label(Rect(sw/6,sh/3,sw*2/3,sh/3),"GAME OVER !", labelStyle);
	GUI.Label(Rect(0,sh/2,sw,sh/4),"press spacebar to replay", labelStyle2);
 

}