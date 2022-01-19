#pragma strict
 
 

function OnTriggerEnter(other: Collider)
{
	if (other.gameObject.tag == "Monster"){
 	 	Destroy(other.gameObject);
 	 	other.gameObject.SendMessage("Kill");
 
	}
	if (other.gameObject.tag == "Flower"){
	 	 other.gameObject.SendMessage("Shot");
 	 	 Destroy(other.gameObject);
 	 	 
	}
 
}

function Start () {

}

function Update () {

}