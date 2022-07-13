import React from 'react'
import {Link} from 'react-router-dom'

function Mcita() {
  return (
        <div>
        
                    <div class="d-grid gap-2">
                <Link  className="nav-link" to='/fcita' class="btn btn-primary btn-lg">Añadir cita</Link>
                    </div>

                    <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Nombre del evento</h5>
                            <p class="card-text">Lugar</p>
                            <h5 class="card-title">Fecha</h5>
                            <h5 class="card-title">Hora</h5>
                            <a href="#" class="btn btn-primary">Modificar</a>
                            <a href="#" class="btn btn-danger">Eliminar</a>
                        </div>
                        </div>
                    </div>
                    </div>
        
        </div>
    );
}

export default Mcita;