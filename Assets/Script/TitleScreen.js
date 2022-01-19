#pragma strict

var labelStyle : GUIStyle;
var labelStyle2 : GUIStyle;
var totalScore : int = 0;

function Start(){
 PlayerPrefs.SetInt("TotalScore", totalScore);
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
	GUI.Label(Rect(sw/6,sh/3,sw*2/3,sh/3),"START GAME", labelStyle);
	GUI.Label(Rect(0,sh/2,sw,sh/4),"press the spacebar", labelStyle2);

}