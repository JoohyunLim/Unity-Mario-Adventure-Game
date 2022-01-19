#pragma strict

var QCube : GameObject;
var OpenedCube : GameObject;
var Heart : GameObject;
var coin : GameObject;
var ran : int;

function OnTriggerEnter (col:Collider) {
	QCube.SetActive(false);
	OpenedCube.SetActive(true);
	collider.isTrigger=false;
	ran = Random.Range(0,15);
	if(ran<5){
		yield WaitForSeconds (0.2);
		Heart.SetActive (true);
	}
	else if(5<=ran && ran<10){
		yield WaitForSeconds (0.2);
		coin.SetActive (true);
	}
}