package com.example.ApiSemillero.controllers;

import com.example.ApiSemillero.models.Servicio;
import com.example.ApiSemillero.services.ServicioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api")
public class ServicioControlador {

    @Autowired
    ServicioService servicioService;

    @GetMapping("/getServicio")
    public ArrayList<Servicio> obtServicio(){
        return servicioService.obtenerServicios();
    }

    @PostMapping ("/postServicio")
    public  Servicio guardar (@RequestBody Servicio servicio ){ return  servicioService.crearServicios(servicio);}

    @GetMapping("/getEstado")
    public  ArrayList<Servicio> estadoServicio(){
        String estado = "Activo";
        return servicioService.obtnerEstadoServicio(estado);
    }

    @PutMapping(path = "/actualizarEstado/{id}")
    public Servicio actualizar(@RequestBody Servicio servicio){
        return servicioService.actualizarEstado(servicio);
    }


}
