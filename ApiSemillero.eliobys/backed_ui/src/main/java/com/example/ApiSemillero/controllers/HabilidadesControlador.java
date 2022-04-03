package com.example.ApiSemillero.controllers;

import com.example.ApiSemillero.models.Habilidades;
import com.example.ApiSemillero.services.HabilidadesServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api")
public class HabilidadesControlador {

    @Autowired
    HabilidadesServicio habilidadesServicio;

    @GetMapping("/obtener")
    public ArrayList<Habilidades> obtenerServicios(){
        return habilidadesServicio.obtenerHabilidades();
    }

    @PostMapping("/crear")
    public Habilidades crearHabilidad (@RequestBody Habilidades habilidad){
        return this.habilidadesServicio.crearHabilidadNueva(habilidad);
    }

}
