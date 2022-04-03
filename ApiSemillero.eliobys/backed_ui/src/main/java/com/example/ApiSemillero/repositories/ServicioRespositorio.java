package com.example.ApiSemillero.repositories;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import com.example.ApiSemillero.models.Servicio;

@Repository
public interface ServicioRespositorio extends JpaRepository<Servicio,Integer> {

    @Query(value = "SELECT * FROM bdwin.servicios u WHERE u.estado_de_servicio = :estado",nativeQuery = true)
    ArrayList<Servicio> buscarPorEstado(@Param("estado") String estado);
}
