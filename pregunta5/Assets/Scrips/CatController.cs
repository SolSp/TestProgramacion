using UnityEngine;
using System.Collections;

public class CatController : MonoBehaviour {

    Animator anim;
    private int time;
	// Use this for initialization
	void Start () {
        anim = GetComponent<Animator>();
        time=0;
	}
	
	// Update is called once per frame
	void Update () {
        

        if(Input.GetKeyDown(KeyCode.D))
        {
            anim.SetInteger("State", 1);
        }
        if (Input.GetKeyUp(KeyCode.D))
        {
            anim.SetInteger("State",0);
        }
        if (Input.GetKeyDown(KeyCode.E))
        {
            anim.SetInteger("State", 2);
        }
        if (Input.GetKeyUp(KeyCode.E))
        {
            anim.SetInteger("State", 0);
        }
        if (Input.GetKeyDown(KeyCode.W))
        {
            anim.SetInteger("State", 3);
        }
        if (Input.GetKeyUp(KeyCode.W))
        {
            anim.SetInteger("State", 4);
        }
	}
}
