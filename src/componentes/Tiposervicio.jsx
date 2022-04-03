import { React, useRef, useState, useEffect } from "react";
import { FormGroup, Button, Container, Col, Row, Form,ToastContainer } from "react-bootstrap";
import {  toast } from 'react-toastify';
import { Link } from "react-router-dom";

export function Tiposervicio() {
  const habilidadRef = useRef();



  

const handlehabilidad = async () => {
  const habilidad = habilidadRef.current.value;

  fetch("http://localhost:8080/api/crear", {
    headers: { "Content-type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      habilidad,
      
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      if (!response.err) {
        console.log("registrado exitosamente");
      } else {
      }
    })
    .catch((error) => console.log(error));

    toast.success("Se Registro la nueva habilidad satisfactoriamente", {
      position: "top-right",
      autoClose: 12000,
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
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridtipohabilidad">
              <Form.Label>Tipo De Habilidad</Form.Label>
              <Form.Control
                ref={habilidadRef}
                name="tipo habilidad"
              
              >
              
              </Form.Control>
            </Form.Group>

     
          </Row>

          <Button onClick={handlehabilidad} variant="primary" type="guardar" id ="btnguardartiposervicio">
            Guardar
          </Button>
          <Link to="/usuario">
            <Button variant="primary" className="btn btn-danger " id ="btnvolveralinicio">Volver al inicio</Button>
          </Link>
          <ToastContainer />
        </Form>
      </Container>
    </>
  );
}

