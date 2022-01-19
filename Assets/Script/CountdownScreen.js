#pragma strict

var labelStyle : GUIStyle;
var timeLeft : float = 3.5;

function Start(){

}
function Update(){
	timeLeft -= Time.deltaTime;
 
	if(timeLeft <= -0.2)
	{	
		timeLeft = 0;
		Application.LoadLevel("main");
	}
}
function OnGUI()
{
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	GUI.Label(Rect(sw/6,sh/3,sw*2/3,sh/3),timeLeft.ToString("0"), labelStyle);

}