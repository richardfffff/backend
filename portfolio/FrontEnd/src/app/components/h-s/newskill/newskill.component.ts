import { Skill } from './../../../model/skill';
import { Router } from '@angular/router';
import { SkillService } from './../../../service/skill.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newskill',
  templateUrl: './newskill.component.html',
  styleUrls: ['./newskill.component.css']
})
export class NewskillComponent implements OnInit {
nombreK: string;
percentk: number;
  constructor(private skillS: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skill(this.nombreK, this.percentk);
    this.skillS.save(skill).subscribe(
      data =>{
        alert("Habilidad agregada correctamente");
        this.router.navigate([""]);
      }, err => {
        alert("fallo");
        this.router.navigate([""])
      }
    )
  }

}
