#pragma strict

function OnTriggerEnter(other: Collider)
{
	other.gameObject.SendMessage("CatchCoin",5);
	Destroy(gameObject);
}
function Start () {

}

function Update () {

}