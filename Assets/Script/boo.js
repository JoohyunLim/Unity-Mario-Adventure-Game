#pragma strict

var RightPos : float = 88;
var ParticlePrefab : GameObject;
function OnTriggerEnter(other: Collider)
{
 	other.gameObject.SendMessage("Mushroom",1);
}
function Kill() 
{
	Instantiate(ParticlePrefab, transform.position, transform.rotation);
 
}
function Start () {

}

function Update () {
 	if (this.transform.position.x >= RightPos) {
		 	Destroy(gameObject); 
	}
}