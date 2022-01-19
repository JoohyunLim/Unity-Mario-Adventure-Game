#pragma strict
 
 
function OnTriggerEnter(other: Collider)
{
	other.gameObject.SendMessage("Fire",1);
 
}
function Start () {
 	 
}

function Update () {
 
}

function Shot(){
	 Destroy(transform.parent.gameObject);
}