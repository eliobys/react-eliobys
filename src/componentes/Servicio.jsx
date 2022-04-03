import { React, useRef, OnInit, useState, useEffect } from "react";
import { FormGroup, Form, Container, Col, Button } from "react-bootstrap";
import {  toast } from 'react-toastify';
import { Link } from "react-router-dom";

export function Servicio() {
  const valordelservicioRef = useRef();
  const estadodelservicioRef = useRef();
  const habilidadRef = useRef();
  const idusuarioRef = useRef();

  const [habilidad, setHabilidad] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/obtener", {
      headers: { "Content-type": "application/json" },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        if (!response.err) {
          setHabilidad(response);
        } else {
        }
      })
      .catch((error) => console.log(error));
    

      fetch("http://localhost:8080/api/getusuario", {
        headers: { "Content-type": "application/json" },
        method: "GET",
      })
        .then((response) => response.json())
        .then((response) => {
          if (!response.err) {
            setUser(response);
          } else {
          }
        })
        .catch((error) => console.log(error));
  }, []);

  const handleServicio = async () => {

    const valorDeServicio = valordelservicioRef.current.value;
    const estadoDeServicio = estadodelservicioRef.current.value;
    const idHabilidad = habilidadRef.current.value;
    const idUsuario = idusuarioRef.current.value;


    
     fetch("http://localhost:8080/api/postServicio", {
       headers: { "Content-type": "application/json" },
       method: "POST",
       body: JSON.stringify({
         valorDeServicio,
         estadoDeServicio,
         idHabilidad,
         idUsuario,
       }),
     })
       .then((response) => response.json())
       .then((response) => {
         if (!response.err) {
           console.log("Servcioinscrito");
         } else {
         }
       })
       .catch((error) => console.log(error));

       toast.success("Se Registro el servicio satisfactoriamente", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
  };

  return (
    <>
      <Container>
        <Form>
          <Form.Group as={Col} controlId="formGridvalordelservicio">
            <Form.Label>Valor del Servicio</Form.Label>
            <Form.Control
              ref={valordelservicioRef}
              type="number"
              placeholder="12345685$"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridestadodelservicio">
            <Form.Label>Estado Del Servicio</Form.Label>
            <Form.Select ref={estadodelservicioRef} defaultValue="Choose...">
              <option>activo</option>
              <option>inactivo</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGrididusuario">
            <Form.Label>Id Usuario</Form.Label>
            <Form.Select ref={idusuarioRef} defaultValue="null">
              <option value="null" disabled>
                Elige tu usuario...
              </option>
              {user.map((state) => (
                <option key={state.idUsuario} value={state.idUsuario}>
                  {state.nombre}
                </option>
              ))}
            </Form.Select>
            
          </Form.Group>

          <Form.Group as={Col} controlId="formGridhabilidad">
            <Form.Label> Habilidad</Form.Label>
            <Form.Select ref={habilidadRef} defaultValue="null">
              <option value="null" disabled>
                Elige tu habilidad...
              </option>
              {habilidad.map((state) => (
                <option key={state.idHabilidad} value={state.idHabilidad}>
                  {state.habilidad}
                </option>
              ))}
            </Form.Select>
            {/* <Form.Control ref ={habilidadRef} type="number" placeholder="12345685"/> */}
          </Form.Group>

          <Button className="my-2" variant="primary" onClick={handleServicio}type="submit" id="btnguardar">
            Guardar
          </Button>
      
        </Form>
      </Container>
    </>
  );
}
