using UnityEngine;
using System.Collections;

public class PlayerBullet : MonoBehaviour {
 
	public GameObject bulletPrefab;
 
	 

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetMouseButtonDown (0)) {
			Vector3 position = new Vector3(transform.position.x, transform.position.y, transform.position.z);
		 
			GameObject bull =  Instantiate(bulletPrefab) as GameObject;
			bull.transform.position =  position ;
			bull.transform.Translate(1.0f,-0.5f,0.0f);
 

	 
		}
	}
}
