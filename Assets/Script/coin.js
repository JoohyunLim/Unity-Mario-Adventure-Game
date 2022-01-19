#pragma strict

function OnTriggerEnter(other: Collider)
{
	other.gameObject.SendMessage("CatchCoin",2);
	Destroy(gameObject);
}
function Start () {

}

function Update () {

}