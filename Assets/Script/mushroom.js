#pragma strict

var LeftPos : float = 18;
var RightPos : float = 26.7;
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
			transform.Translate(Vector3.right * 2 * Time.deltaTime, Space.World);
			Direction = 1;
		}
	
		if (this.transform.position.x > RightPos) {
			transform.rotation = Quaternion.Euler (new Vector3 (0, 0, 0));
			Direction = 2;
		}

		if (Direction == 2) {
			transform.Translate(Vector3.right * -2 * Time.deltaTime, Space.World);
			Direction = 2;
		}
		
		if (this.transform.position.x < LeftPos) {
			Direction = 1;
			transform.Rotate(0.0f, 180.0f, 0.0f, Space.Self);
		}
}