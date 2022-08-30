/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolio.mrf.Repository;

import com.portfolio.mrf.Entity.Skill;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author richa
 */
@Repository
public interface RSkill extends JpaRepository<Skill, Integer> {
    public Optional<Skill>findByNombreK(String nombreK);
    public boolean existsByNombreK(String nombreK);
}
