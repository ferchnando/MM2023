
import { useState } from 'react';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';

function RegistrarPaciente(){

const [ident, setIdentificacion]= useState("");
const [primerN, setPrimerN]= useState("");
const [segundoN, setSegundoN]= useState("");
const [primerAp, setPrimerAp]= useState("");
const [segundoAp, setSegundoAp]= useState("");
const [fechaN, setFechaN]= useState("");
const [genero, setGenero]= useState("");
const [grupoEt, setGrupoEt]= useState("");
const [ocupation, setOcupation]= useState("");
const [estadoC, setEstadoC]= useState("");
const [telefono, setTelefono]= useState("");
const [fechaAt, setFechaAt]= useState("");
const [foto, setFoto]= useState("");
const [educationLevel, setEducationLevel]= useState("");
const [id, setId]= useState("");



const [pacientesList,setPacientes]= useState([]);

const [editar, setEditar]= useState(false);


const registrarPaciente =()=>{
 Axios.post("http://localhost:3000/api/v1/person",{

    ident:ident,
    primerN:primerN,
    segundoN:segundoN,
    primerAp:primerAp,
    segundoAp:segundoAp,
    fechaN:fechaN,
    genero:genero,
    grupoEt:grupoEt,
    ocupation:ocupation,
    estadoC:estadoC,
    telefono:telefono,
    fechaAt:fechaAt,
    educationLevel:educationLevel,
    foto:foto
 }).then(()=>{
    obtenerPaciente();
    alert("paciente registrado");
    limpiarCampos();
    Swal.fire({
    title: "<strong>Registro Exitoso!</strong>",
    html: "<i>El Paciente <strong>"+primerN+ " </strong>fue registrado con éxito!</i>",
    icon: 'success',
    timer:2000
  }).catch(function(error){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No se logró Crear el Paciente!',
      footer: error.AxiosError
    })
  });
 });

}

const actualizarPaciente =()=>{
    Axios.put("http://localhost:3001/person/:id'",{
  
      id:id,
      ident:ident,
      primerN:primerN,
      segundoN:segundoN,
      primerAp:primerAp,
      segundoAp:segundoAp,
      fechaN:fechaN,
      genero:genero,
      grupoEt:grupoEt,
      ocupation:ocupation,
      estadoC:estadoC,
      telefono:telefono,
      fechaAt:fechaAt,
      educationLevel:educationLevel,
      foto:foto
    }).then(()=>{
      obtenerPaciente(); 
      limpiarCampos();
      Swal.fire({
        title: "<strong>Actualización Exitosa!</strong>",
        html: "<i>El Paciente <strong>"+primerN+ " </strong>fue actualizado con éxito!</i>",
        icon: 'success',
        timer:2000
      }).catch(function(error){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se logró actualizar el Paciente!',
          footer: error.AxiosError
        })
      });
    });
  
 }

 const eliminarPaciente =(val)=>{

  Swal.fire({
    title: 'Desea Eliminar?',
    html: "<i>Realmente desea elimiar a <strong>"+val.primerN+ " </strong></i>",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminarlo!'
  }).then((result) => {
    if (result.isConfirmed) {
      Axios.delete(`http://localhost:3001/person/${id}`).then(()=>{
        obtenerPaciente(); 
        limpiarCampos();
        Swal.fire({
          icon: 'success',
          title: val.primerN+' fue eliminado',
          showConfirmButton: false,
          timer: 2000
        });
      }).catch(function(error){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se logró eliminar el Paciente!',
          footer: error.AxiosError
        })
      });
    }
  });

 
}

 const limpiarCampos = ()=>{

    setIdentificacion("");
    setPrimerN("");
    setSegundoN("");
    setPrimerAp("");
    setSegundoAp("");
    setFechaN("");
    setGenero("");
    setGrupoEt("");
    setOcupation("");
    setEstadoC("");
    setTelefono("");
    setFechaAt("");
    setFoto("");
    setEducationLevel("");
    setEditar(false);

 }

const EditarPaciente =(val)=> {
  setEditar(true);

    setIdentificacion("");
    setPrimerN("");
    setSegundoN("");
    setPrimerAp("");
    setSegundoAp("");
    setFechaN("");
    setGenero("");
    setGrupoEt("");
    setOcupation("");
    setEstadoC("");
    setTelefono("");
    setFechaAt("");
    setFoto("");
    setEducationLevel("");
  setId(val.id);
}

const obtenerPaciente =()=>{
 Axios.get("http://localhost:3000/api/v1/person").then((respuesta)=>{
    setPacientes(respuesta.data);
 });

 obtenerPaciente();

}

  return (
    <div className="container">
   
    <div className="card text-center">
      <div className="card-header">
        Ingreso de Pacientes
      </div>
      <div className="card-body">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"> Identificacion: </span>
          <input type="text" value={ident}
          onChangeCapture={(event)=>{
            setIdentificacion(event.target.value)
            }}
          className="form-control" placeholder="Ingrese la Cédula" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"> Primer Nombre: </span>
          <input type="text" value={primerN}
          onChangeCapture={(event)=>{
            setPrimerN(event.target.value)
            }}
          className="form-control" placeholder="Ingrese el primer nombre " aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
       
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"> Segundo Nombre: </span>
          <input type="text" value={segundoN}
          onChangeCapture={(event)=>{
            setSegundoN(event.target.value)
            }} 
          className="form-control" placeholder="Ingrese Segundo Nombre" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"> Primer Apellido: </span>
          <input type="text" value={primerAp}
          onChangeCapture={(event)=>{
            setPrimerAp(event.target.value)
            }} 
          className="form-control" placeholder="Ingrese Segundo Nombre" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
          
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"> Segundo Apellido: </span>
          <input type="text" value={segundoAp}
          onChangeCapture={(event)=>{
            setSegundoAp(event.target.value)
            }} 
          className="form-control" placeholder="Ingrese Segundo Nombre" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
          
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"> Fecha de Nacimiento: </span>
          <input type="date" value={fechaN}  min="1915-01-01" max="2023-06-08"
          onChangeCapture={(event)=>{
            setFechaN(event.target.value)
            }} 
          className="form-control" placeholder="Ingrese Fecha de Nacimiento" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
          
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"> Género: </span>
          <select type="text"  required>
            <option value={genero}></option>
            <option value={genero}>M</option>
            <option value={genero}>F</option>
         
          onChangeCapture={(event)=>{
            setGenero(event.target.value)
            }} 
          className="form-control" placeholder="Seleccione Genero" aria-label="Username" aria-describedby="basic-addon1"</select>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"> Grupo étnico: </span>
          <input type="text" value={grupoEt}
          onChangeCapture={(event)=>{
            setGenero(event.target.value)
            }} 
          className="form-control" placeholder="Seleccione Grupo Étnico" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"> Ocupación: </span>
          <input type="text" value={grupoEt}
          onChangeCapture={(event)=>{
            setGenero(event.target.value)
            }} 
          className="form-control" placeholder="Seleccione Ocupación" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
          
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"> Estado Civil: </span>
          <select type="text" required>

            <option value={estadoC}></option>
            <option value={estadoC}>Casado</option>
            <option value={estadoC}>Soltero</option>
            <option value={estadoC}>Divorciado</option>
            <option value={estadoC}>Union Libre</option>
            <option value={estadoC}>Divorciado</option>
          onChangeCapture={(event)=>{
            setEstadoC(event.target.value)
            }} 
            
          className="form-control" placeholder="Seleccione estado civil" aria-label="Username" aria-describedby="basic-addon1"</select>
        </div> 
          
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"> Telefono: </span>
          <input type="number" value={telefono}
          onChangeCapture={(event)=>{
            setTelefono(event.target.value)
            }} 
          className="form-control" placeholder="Ingrese numero de telefono" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>  
          
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"> Fecha de Atencion:  </span>
          <input type="date" value={fechaAt} min="2023-06-08" max="2023-06-11"
          onChangeCapture={(event)=>{
            setFechaAt(event.target.value)
            }} 
          className="form-control" placeholder="Seleccione fecha" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>  
        
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"> FOTO:  </span>
          <input type="text" value={foto}
          onChangeCapture={(event)=>{
            setFoto(event.target.value)
            }} 
          className="form-control" placeholder="inserte foto" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>  
      </div>
      <div className="card-footer text-muted">

        {
          editar==true?
          <div>
          <button className='btn btn-warning m-2' onClick={actualizarPaciente}>Actualizar</button> 
          <button className='btn btn-info m-2' onClick={limpiarCampos}>Cancelar</button>
          </div>
          :<button className='btn btn-success' onClick={registrarPaciente}>REGISTRAR PACIENTE</button>
        }

    </div>
</div>

<table className="table table-striped">
      <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Cedula</th>
            <th scope="col">Primer Nombre:</th>
            <th scope="col">Segundo Nombre:</th>
            <th scope="col">Primer Apellido</th>
            <th scope="col">Segundo Apellido</th>
            <th scope="col">Fecha Nacimineto:</th>
            <th scope="col">Genero:</th>
            <th scope="col">Estado Civil:</th>
            <th scope="col">Telefono:</th>
            <th scope="col">Fecha Atención:</th>
            <th scope="col">Foto:</th>
            <th scope="col">ACCIONES</th>
          </tr>
      </thead>
      <tbody>

      {
            pacientesList.map((val,key)=>{
              return 
                <tr key={val.id}>
                <th scope="row">(val.id)</th>
                <td>(val.primerN)</td>
                <td>(val.segundoN)</td>
                <td>(val.primerAp)</td>
                <td>(val.segundoAp)</td>
                <td>(val.fechaN)</td>
                <td>(val.genero)</td>
                <td>(val.estadoC)</td>
                <td>(val.telefono)</td>
                <td>(val.fechaAt)</td>
                <td>(val.foto)</td>
                <td>
                  <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" 
                    onClick={()=>{
                      EditarPaciente(val)
                    }}  
                    
                    className="btn btn-info">Editar</button>
                    <button type="button" onClick={()=>{
                      eliminarPaciente(val);
                    }} className="btn btn-danger">Eliminar</button>
                  </div>
                </td>
            </tr>
            })
      }
         
      </tbody>
</table>

</div>
  );
}

export default RegistrarPaciente;