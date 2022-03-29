package com.example.ApiSemillero.services;

import com.example.ApiSemillero.models.Servicio;
import com.example.ApiSemillero.models.Usuario;
import com.example.ApiSemillero.repositories.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class UsuarioServicio {
    @Autowired
    UsuarioRepositorio usuarioRepositorio;

    public List<Usuario> getCountry(){
        return usuarioRepositorio.findAll();
    }

    public  ArrayList<Usuario> getCityID(Integer id){
        return  (ArrayList<Usuario>) usuarioRepositorio.findByCityID(id);
    }

    public Usuario guardarUsuario(Usuario usuario){
        return usuarioRepositorio.save(usuario);
    }
    public List<Usuario> obtenerusuario() {
        return usuarioRepositorio.findAll();
    }
}
