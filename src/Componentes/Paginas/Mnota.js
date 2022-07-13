import React from 'react'
import {Link} from 'react-router-dom'

function Mnota() {
  return (
    <div>

<div class="d-grid gap-2">
      <Link  className="nav-link" to='/fnota' class="btn btn-primary btn-lg">Añadir Nota</Link>
</div>

<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Traer el mandado</h5>
        <p class="card-text">Medio de tortilla, un kilo de frijol, patitas de puerco, un fabuloso</p>
        <a href="#" class="btn btn-primary">Modificar</a>
        <a href="#" class="btn btn-danger">Eliminar</a>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Mnota;