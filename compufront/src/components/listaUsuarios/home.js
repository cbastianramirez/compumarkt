import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Home() {
  return (
    <>
            <div>
        <h1>
        Bienvenido a CompuMark't
        </h1>
        <br></br>
      </div>
      <Form>
        
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="Ingresar correo electrónico" />
          <Form.Text className="text-muted">
            No compartiremos el correo electrónico con nadie
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingresar contraseña" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Guardar datos" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </>  
  );
}

export default Home;