import { React, useRef, useState, useEffect } from "react";
import {Form,Col,Row,Button,Container,ToastContainer,} from "react-bootstrap";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export function Aceptarservicio() {
  toast.configure();
  const valordelservicioRef = useRef();
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

  const handleaceptarservicio = async () => {
    const valorDeServicio = valordelservicioRef.current.value;
    const idHabilidad = habilidadRef.current.value;
    const idUsuario = idusuarioRef.current.value;
    const estadoDeServicio = "emparejado";

    fetch("http://localhost:8080/api/postServicio", {
      headers: { "Content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        valorDeServicio,
        idHabilidad,
        idUsuario,
        estadoDeServicio,
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
      
      toast.success("Se acepto satisfactoriamente el servicio", { 
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
            <Form.Group as={Col} controlId="formGridnombre">
              <Form.Label>Nombre</Form.Label>
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
          </Row>

          <Form.Group as={Col} controlId="formGridcedula">
            <Form.Label>Valor del servicio</Form.Label>
            <Form.Control
              ref={valordelservicioRef}
              type="number"
              placeholder="12345685"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridHabilidad">
            <Form.Label>Habilidad: </Form.Label>
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
          </Form.Group>

          <Button
            className="my-2 btn btn-success" type="submit"   onClick={handleaceptarservicio}>
            Aceptar
          </Button>
          <Link to="/servicio">
            <Button variant="primary" className="btn btn-danger " type="submit">Rechazar Servicio</Button>
          </Link>
          <ToastContainer />
        </Form>
      </Container>
    </>
  );
}
