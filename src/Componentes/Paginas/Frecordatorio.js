import React from 'react'

function Frecordatorio() {
  return (
    <div>

<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Acordarme de</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Fecha</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Hora</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <button type="submit" class="btn btn-primary">Guardar</button>
  <button type="submit" class="btn btn-danger">Cancelar</button>
</form>

    </div>
  )
}

export default Frecordatorio;