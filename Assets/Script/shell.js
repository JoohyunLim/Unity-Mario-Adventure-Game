#pragma strict

var LeftPos : int = 89;
var RightPos : int = 101;
var Direction : int = 1;
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
	    
		if (Direction == 1) {
			transform.Translate(Vector3.right * 8 * Time.deltaTime, Space.World);
			transform.Rotate(0, 35, 0, Space.World);
			Direction = 1;
		}
	
		if (this.transform.position.x > RightPos) {
	 
			Direction = 2;
		}

		if (Direction == 2) {
			transform.Translate(Vector3.right * -8 * Time.deltaTime, Space.World);
			transform.Rotate(0, 35, 0, Space.World);
			Direction = 2;
		}
		
		if (this.transform.position.x < LeftPos) {
			Direction = 1;
	 
		}

}

 
 