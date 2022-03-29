import { React, useRef,useState, useEffect } from "react";
import { Form, Col, Row, Button, Container,ToastContainer,} from "react-bootstrap";
import { Link } from "react-router-dom";
import {  toast } from 'react-toastify';


export function Usuario() {
  const nombreRef = useRef();
  const apellidoRef = useRef();
  const tipodedocumentoRef = useRef();
  const numeroDeTelefonoRef = useRef();
  const cedulaRef = useRef();
  const emailRef = useRef();
  const direccionRef = useRef();
  const ciudadderesidenciaRef = useRef();
  const rolRef = useRef();
  const habilidadRef = useRef();
  const contrasenaRef = useRef();

  const [habilidad, setHabilidad] = useState([]);
  const [habilidadShow, setHabilidadShow] = useState(true);


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
 
}, []);

  const handleHabilidadMostrar= () =>{
    if(rolRef.current.value === "hacedor"){
      setHabilidadShow(false);
    }else{
      setHabilidadShow(true);
    }
    console.log(habilidadShow);
  };

  const handleUsuario = async () => {
    const nombre = nombreRef.current.value;
    const apellidos = apellidoRef.current.value;
    const tipoDeDocumento = tipodedocumentoRef.current.value;
    const cedula = cedulaRef.current.value;
    const correoElectronico = emailRef.current.value;
    const direccion = direccionRef.current.value;
    const ciudadDeResidencia = ciudadderesidenciaRef.current.value;
    const rol = rolRef.current.value;
    const habilidad = habilidadRef.current.value;
    const contrasena = contrasenaRef.current.value;
    const numeroDeTelefono = numeroDeTelefonoRef.current.value;

    fetch("http://localhost:8080/api/post", {
      headers: { "Content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        nombre,
        apellidos,
        tipoDeDocumento,
        cedula,
        correoElectronico,
        direccion,
        ciudadDeResidencia,
        rol,
        habilidad,
        contrasena,
        numeroDeTelefono
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

      toast.success("Se Registro el cliente satisfactoriamente", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

        toast.success("Se Registro el hacedor satisfactoriamente", {
          position: "top-right",
          autoClose: 7000,
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
              <Form.Control ref={nombreRef} type="text" placeholder="nombre" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridapellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control ref={apellidoRef} placeholder="apellido" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridtipodedocumento">
            <Form.Label>Tipo De Documento</Form.Label>
            <Form.Control ref={tipodedocumentoRef} placeholder="" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridcedula">
            <Form.Label>Cedula</Form.Label>
            <Form.Control
              ref={cedulaRef}
              type="number"
              placeholder="12345685"
            />
          </Form.Group>

          <Form.Group
            as={Col}
            className="correoelectronico"
            controlId="formGridcorreoelectronico"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGriddireccion">
            <Form.Label>Direccion</Form.Label>
            <Form.Control ref={direccionRef} placeholder="calle o carrera" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridcontrasena" type="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control ref={contrasenaRef} placeholder="contraseña" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridciudad">
              <Form.Label>Ciudad de Residencia</Form.Label>
              <Form.Control ref={ciudadderesidenciaRef} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridRol">
              <Form.Label>Rol</Form.Label>
              <Form.Select ref={rolRef} defaultValue="null" onClick={handleHabilidadMostrar}>
                <option value="null" disabled>Elige tu rol...</option>
                <option key="hacedor"  value="hacedor">hacedor</option>
                <option key="cliente"  value="cliente">cliente</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridHabilidad" hidden={habilidadShow}>
              <Form.Label>Habilidad: </Form.Label>
              <Form.Select ref={habilidadRef}  defaultValue="null">
                <option value="null" disabled>Elige tu trabajo...</option>
              {habilidad.map((state) => (
                  <option key={state.idhabilidad} value={state.habilidad}>
                    {state.habilidad}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridnumerodetelefono">
              <Form.Label>Numero De Telefono</Form.Label>
              <Form.Control
                ref={numeroDeTelefonoRef}
                type="number"
                placeholder="12345685"
              />
            </Form.Group>
          </Row>

          <Button onClick={handleUsuario} variant="primary" type="submit">
            Guardar
          </Button>

          <Link to="/tipo_servicio">
              <Button variant="primary" className="btn btn-dark ">
                Agregar una Habilidad
              </Button>
          </Link>

          <Link to="/Servicio">
              <Button variant="primary" className=" btn btn-success">
                Pedir un Servicio
              </Button>
          </Link>

          <Link to="/Aceptar-servicio">
              <Button variant="primary">
              Aceptar Servicio
              </Button>
          </Link>

          <ToastContainer />
        </Form>
      </Container>
    </>
  );
}

