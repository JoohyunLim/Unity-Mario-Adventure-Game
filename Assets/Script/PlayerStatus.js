#pragma strict
#pragma strict

var life : int = 5;
var coin : int = 0;

var Direction : int = 1;

private var countdown : float = 60.0;
 
var mushroomParticlePrefab : GameObject;
var lifeParticlePrefab : GameObject;
var labelStyle : GUIStyle;
var labelStyle2 : GUIStyle;
var labelStyle3 : GUIStyle;
 
function Mushroom(amount : int) 
{
	Instantiate(mushroomParticlePrefab, transform.position, transform.rotation);
	life -= amount;
}
function CatchCoin(amount : int) 
{
	Instantiate(lifeParticlePrefab, transform.position, transform.rotation);
	coin += amount;
 
}
function Heart(amount : int) 
{
	Instantiate(lifeParticlePrefab, transform.position, transform.rotation);
	if(life<5)
		life += amount;
 
}
 

function Fire(amount : int) 
{	
	life -= amount;
}

function Finish() 
{
	PlayerPrefs.SetInt("Coin", coin);
	Application.LoadLevel("goalin");
  
}

 
function OnGUI()
{
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	GUI.Label(Rect(0,0,sw*2/3,sh/3),"  LIFE " + life.ToString() +"/5", labelStyle);
	GUI.Label(Rect(0,sh/20,sw,sh),"  $ "+coin.ToString(), labelStyle3);
	GUI.Label(Rect(0,0,sw,sh/4),countdown.ToString("0") , labelStyle2);
	
}
function Start () {
  
}

function Update () {
				
	countdown -= Time.deltaTime;
 	 
 
	if(countdown <= -0.2)
	{	
		countdown = 0;
		Application.LoadLevel("gameover");	
		
	}
	
	if(life == 0)
	{	
		Application.LoadLevel("gameover");	
		
	}
	
	if (this.transform.position.y < -8)
	{
		Application.LoadLevel("gameover");	
	}
	
}