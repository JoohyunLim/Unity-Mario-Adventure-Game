using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class bullet : MonoBehaviour {
	public float speed = 10f;
	public float lifetime = 0.7f;
	public float timer;
	

	// Use this for initialization
	void Start () {
		timer = lifetime;
	}
	
	// Update is called once per frame
	void Update () {

				transform.position += transform.right * speed * Time.deltaTime;
				lifetime -= Time.deltaTime;
				if (lifetime <= 0f) {
						Destroy (gameObject);
				}
		}
}
