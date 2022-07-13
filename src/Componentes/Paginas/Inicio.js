import React, { Component } from 'react' ;
import {Link} from 'react-router-dom'


class Inicio extends Component{
render(){
return(


<div>

<div class="d-grid gap-2">
  <Link  className="nav-link" to='/mrecordatorio' class="btn btn-danger">+ Recordatorio</Link>
  <Link  className="nav-link" to='/mnota' class="btn btn-danger">+ Notas</Link>
  <Link className="nav-link" to='/mcita' class="btn btn-danger">+ Citas</Link>
  <Link className="nav-link" to='/mevento' class="btn btn-danger">+ Eventos</Link>
</div>
</div>



 
        );
      }
}

export default Inicio;