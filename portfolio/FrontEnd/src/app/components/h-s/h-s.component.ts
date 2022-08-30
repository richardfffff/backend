import { TokenService } from 'src/app/service/token.service';
import { SkillService } from './../../service/skill.service';
import { Skill } from './../../model/skill';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-h-s',
  templateUrl: './h-s.component.html',
  styleUrls: ['./h-s.component.css']
})
export class HSComponent implements OnInit {
skill: Skill[] = [];

  constructor(private skillS: SkillService, private tokenService: TokenService) { }
isLogged = false;

  ngOnInit(): void {
    this.cargarSkill();
   if(this.tokenService.getToken()){
  this.isLogged = true;
  } else{
  this.isLogged = false;
  }
  }

  cargarSkill(): void{
    this.skillS.lista().subscribe(
      data=>{
        this.skill = data;
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(
        data => {
        this.cargarSkill();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
      }
    }
  }


