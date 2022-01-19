using System.Collections.Generic;
using UnityEngine;

public class booAI : MonoBehaviour
{
	public Transform Player;
	int MoveSpeed = 3;
	int Max = 10;
	double Min = 0.5;
	
	
	void Start()
	{
		
	}
	
	void Update()
	{
		
		transform.LookAt(Player);
		
		
		if (Vector3.Distance(transform.position, Player.position)<=Max  && Vector3.Distance(transform.position, Player.position) >= Min)
		{	 
			transform.position += transform.forward * MoveSpeed * Time.deltaTime;		

			
		}
		
	}
}
