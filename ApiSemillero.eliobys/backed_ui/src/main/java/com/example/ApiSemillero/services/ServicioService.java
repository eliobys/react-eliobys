package com.example.ApiSemillero.services;

import com.example.ApiSemillero.models.Servicio;
import com.example.ApiSemillero.repositories.ServicioRespositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.Optional;

@Service
public class ServicioService {

    @Autowired
    ServicioRespositorio servicioRepositorio;

    public ArrayList<Servicio> obtenerServicios(){
        return (ArrayList<Servicio>) servicioRepositorio.findAll();
    }

    public Servicio crearServicios(Servicio servicio){ return  servicioRepositorio.save(servicio);}

    public ArrayList<Servicio> obtnerEstadoServicio(String estado) { return servicioRepositorio.buscarPorEstado(estado);}

    public Servicio actualizarEstado(Servicio servicio){
        Optional<Servicio> optional = servicioRepositorio.findById(servicio.getIdServicios());
        Servicio existenteServicio = optional.get();
        existenteServicio.setEstadoDeServicio(servicio.getEstadoDeServicio());
        return servicioRepositorio.save(existenteServicio);
    }

}
