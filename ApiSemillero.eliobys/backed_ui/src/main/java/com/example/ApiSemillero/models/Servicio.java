package com.example.ApiSemillero.models;

import javax.persistence.*;

@Entity
@Table (name = "Servicios")

public class Servicio {
    @Id
    @GeneratedValue ( strategy = GenerationType.IDENTITY)
    @Column (unique = true , nullable = false)
    private int idServicios;


    @Column(nullable = false)
    private int valorDeServicio;

    @Column(nullable = false)
    private String estadoDeServicio;

    @Column (nullable = false)
    private int idUsuario;

    @Column (nullable = false)
    private int idHabilidad;


    public int getIdServicios() {
        return idServicios;
    }

    public void setIdServicios(int idServicios) {
        this.idServicios = idServicios;
    }

    public int getValorDeServicio() {
        return valorDeServicio;
    }

    public void setValorDeServicio(int valorDeServicio) {
        this.valorDeServicio = valorDeServicio;
    }

    public String getEstadoDeServicio() {
        return estadoDeServicio;
    }

    public void setEstadoDeServicio(String estadoDeServicio) {
        this.estadoDeServicio = estadoDeServicio;
    }

    public int getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }

    public int getIdHabilidad() {
        return idHabilidad;
    }

    public void setIdHabilidad(int idHabilidad) {
        this.idHabilidad = idHabilidad;
    }
}
