#pragma strict

var labelStyle : GUIStyle;
var labelStyle2 : GUIStyle;
var labelStyle3 : GUIStyle;
var score : int;
var totalScore : int;

function Start(){
 	score = PlayerPrefs.GetInt("Coin");
	totalScore = PlayerPrefs.GetInt("TotalScore", totalScore);
	totalScore += score;
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
	GUI.Label(Rect(sw/6,sh/4,sw*2/3,sh/4),"GOAL IN !", labelStyle);
	GUI.Label(Rect(0,sh/2,sw,sh/4),"press spacebar to replay", labelStyle2);
	GUI.Label(Rect(0,0,sw,sh/4),"$ "+totalScore.ToString(), labelStyle3);

}