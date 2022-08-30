import { ActivatedRoute, Router } from '@angular/router';
import { SkillService } from './../../../service/skill.service';
import { Skill } from './../../../model/skill';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editskill',
  templateUrl: './editskill.component.html',
  styleUrls: ['./editskill.component.css']
})
export class EditskillComponent implements OnInit {
skill: Skill = null;
  constructor(
    private skillS: SkillService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.details(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        alert("Error al modificar habilidad");
        this.router.navigate([''])
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar la habilidad");
        this.router.navigate(['']);
      }
    )
  }

}
