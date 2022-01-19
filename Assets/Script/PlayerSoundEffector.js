#pragma strict

var coinSE : AudioClip;
var heartSE : AudioClip;
var damageSE : AudioClip;
var jumpSE : AudioClip;
var monsterDieSE : AudioClip;

function Start () { 
 	
}

function Update () {
	 if (Input.GetMouseButtonDown (0)){
		Kill();
	 }
	 if (Input.GetKeyDown("space")){
	 	Jump();
	 }
}

function CatchCoin(amount : int)
{
	audio.PlayOneShot(coinSE);
}
function Kill( )
{
	audio.PlayOneShot(monsterDieSE);
}
function Jump( )
{
	audio.PlayOneShot(jumpSE);
}
function Heart(amount : int)
{
	audio.PlayOneShot(heartSE);
}

function Mushroom(amount : int) 
{
	audio.PlayOneShot(damageSE);
}
function Fire(amount : int) 
{
	audio.PlayOneShot(damageSE);
}
 