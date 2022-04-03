package com.example.ApiSemillero.services;

import com.example.ApiSemillero.models.Habilidades;
import com.example.ApiSemillero.repositories.HabilidadesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class HabilidadesServicio {

    @Autowired
    HabilidadesRepository habilidadesRepository;

    public ArrayList<Habilidades> obtenerHabilidades(){
        return (ArrayList<Habilidades>) habilidadesRepository.findAll();
    }

    public Habilidades crearHabilidadNueva(Habilidades habilidad){
        return habilidadesRepository.save(habilidad);
    }
}
