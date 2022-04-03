package com.example.ApiSemillero.controllers;

import com.example.ApiSemillero.models.Usuario;
import com.example.ApiSemillero.services.UsuarioServicio;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Collections;
import java.util.Optional;


@RestController
@RequestMapping("/api")
public class UsuarioControlador {
    @Autowired
    UsuarioServicio usuarioServicio;

    @GetMapping("/get")
    public ArrayList<Usuario> getCountryAll(){
        return  (ArrayList<Usuario>) usuarioServicio.getCountry();
    }

    @GetMapping("/getusuario")
    public List<Usuario> getusuarios(){
        return  (List<Usuario>) usuarioServicio.obtenerusuario();
    }

    @GetMapping(path = "/{ID}")
    public ArrayList<Usuario> getCityID(@PathVariable("ID") Integer ID){
        return  usuarioServicio.getCityID(ID);
    }

    @PostMapping("/post")
    public Usuario guardar(@RequestBody Usuario usuario){
        return usuarioServicio.guardarUsuario(usuario);
    }
}
