package com.example.ApiSemillero.models;

import javax.persistence.*;

@Entity
@Table(name = "Habilidades")

public class Habilidades {
    @Id
    @GeneratedValue ( strategy = GenerationType.IDENTITY)
    @Column (unique = true , nullable = false)
    private int idHabilidad;

    @Column (nullable=false)
    private String habilidad;

    public int getIdHabilidad() {
        return idHabilidad;
    }

    public void setIdHabilidad(int idHabilidad) {
        this.idHabilidad = idHabilidad;
    }

    public String getHabilidad() {
        return habilidad;
    }

    public void setHabilidad(String habilidad) {
        this.habilidad = habilidad;
    }
}
