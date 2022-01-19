#pragma strict

function OnTriggerEnter(other: Collider)
{ 
	other.gameObject.SendMessage("Finish");
}
function Start () {

}

function Update () {

}