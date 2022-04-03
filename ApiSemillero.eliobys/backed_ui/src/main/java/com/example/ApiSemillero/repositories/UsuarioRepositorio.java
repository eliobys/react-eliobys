package com.example.ApiSemillero.repositories;

import com.example.ApiSemillero.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario,Integer> {


    @Query(value = "SELECT * FROM world.usuario u WHERE u.id_usuario = :code",nativeQuery = true)
    ArrayList<Usuario> findByCityID(@Param("code") Integer id);
}
