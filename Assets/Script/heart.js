#pragma strict

function OnTriggerEnter(other: Collider)
{
	other.gameObject.SendMessage("Heart",1);
	Destroy(gameObject);
}

function Start () {

}

function Update () {

}