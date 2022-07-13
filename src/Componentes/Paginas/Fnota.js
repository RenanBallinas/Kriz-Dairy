import React, {useState } from "react";
import Axios from '../../Services/ConexionAxios';



function Registrar(){
  const variables={
    titulo:"",
    texto:"",
  }

   const [valores,setValores] = useState(variables);

   const Validar=(e)=>{
    const { name, value} = e.target;
    setValores({ ...valores, [name]: value});
   }

   const Guardar=async()=>{
   await Axios.post('/persona/guardar',{
    
      titulo:valores.titulo,
    texto:valores.texto,
    }).then(()=>{
     console.log('registro guardado con éxito');
    })
    }

    
   const Enviar = (e) => {
    e.preventDefault();
   Guardar();
   console.log(valores);
  };


  return(
    <>
    <div className="container-fluid p-4">
      <div class="card">
       <div class="card-header">Formulario de Recordatorios</div>
       <div class="card-body">
        <p class="card-text">
          <form onSubmit={Enviar}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                titulo
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                name="titulo"
                value={valores.titulo}
                onChange={Validar}
                placeholder="Titulo de Registro"
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                texto
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                name="texto"
                value={valores.texto}
                onChange={Validar}
                placeholder="cuerpo de texto"
              />
            </div>

            

            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </p>
      </div>
    </div>
  </div>
    </>
  )
}   

export default Registrar;