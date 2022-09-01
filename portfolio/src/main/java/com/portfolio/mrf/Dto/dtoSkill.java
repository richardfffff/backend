/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.mrf.Dto;

import javax.validation.constraints.NotBlank;

/**
 *
 * @author richa
 */
public class dtoSkill {
    @NotBlank
    private String nombreK;
    @NotBlank
    private int percentK; 

    public dtoSkill() {
    }

    public dtoSkill(String nombreK, int percentK) {
        this.nombreK = nombreK;
        this.percentK = percentK;
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
