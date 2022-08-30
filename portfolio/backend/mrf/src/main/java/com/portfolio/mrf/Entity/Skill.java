/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.mrf.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 *
 * @author richa
 */
@Entity
public class Skill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombreK;
    private int percentK; 

    public Skill() {
    }

    public Skill(String nombreK, int percentK) {
        this.nombreK = nombreK;
        this.percentK = percentK;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombreK() {
        return nombreK;
    }

    public void setNombreK(String nombreK) {
        this.nombreK = nombreK;
    }

    public int getPercentK() {
        return percentK;
    }

    public void setPercentK(int percentK) {
        this.percentK = percentK;
    }
    
    
}
