
import React, { Component } from 'react';
import '../css/RegisterPacient.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const baseUrl='http://localhost:3000/api/v1/Person';

/*function IngresarDireccion(){
    const [arrayGrupos, setgrupo] = React.useState(["MESTIZO","INDOAMERICANO"]);
    
    function addItem(){

      setgrupo((array)) => {
        return [...array, `Elemento $${thingsArray.length + 1}`];
      }
    }

    const grupos = arrayGrupos.map(grupo=> <p key={grupo}>{grupo}</p>)

    return (
      <div>
            <button onClick={addItem}>Agregar Grupo</button>
            {elementos}
        </div>
    )

 }*/

class RegisterPacient extends Component {
    state={
        form:{
            identification: '',
            firstname: '',
            secondname:'',
            paternallastname:'',
            maternalLastname:'',
            gender:'',
            ethnicGroup:[],
            occupation:'',
            birthdate:'',
            maritalStatus:'',
            phonenumber:'',
            address:[],
            educationalLevel:'',
            related:'',
            relationship:'',
            image:''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    registPerson=async()=>{
       await axios.post(baseUrl,{identification: this.state.form.identification, firstname:this.state.form.firstname, 
        secondname:this.state.form.secondname, paternallastname:this.state.form.paternallastname, gender:this.state.form.gender,
        ethnicGroup:this.state.form.ethnicGroup, occupation:this.state.form.occupation, birthdate:this.state.form.birthdate,
        maritalStatus:this.state.form.maritalStatus, address:this.form.address})
        .then(response=>{
            return response.data;
          
        })
        .then(response=>{
            if(response.length>0){
               
            }else{
                alert('No se registro el Paciente');
                //window.location.href="./RegisterPacient";
            }
        })
        .catch(error=>{
            console.log(error);
        }) 
    }

    /*componentDidMount() {
        if(cookies.get('email')){
          //window.location.href="../menu";
        }*/
    
    

    render() {
        return (
          <div className="form-group">
          <h1>CREAR PACIENTE </h1>
            <label>Identification: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="identification"
              onChange={this.handleChange}
            />
            <br />
            <label>firstname: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="firstname"
              onChange={this.handleChange}
            />
            <br />
            <label>SecondName: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="secondname"
              onChange={this.handleChange}
            />
            <br />
            <label>paternallastname: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="paternallastname:"
              onChange={this.handleChange}
            />
            <br />

            <br />
            <label>maternalLastname: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="paternallastname:"
              onChange={this.handleChange}
            />
            <br />

            <br />
            <label>gender:</label>
            <br />
            <select 
            type="text"  required>
            <option name=" ">M</option>
            <option name="">F</option>
            onChange={this.handleChange}
            </select>
            <br />

            <br />
            <label>ethnicGroup:</label>
            <button className="btn btn-primary" >Crear Grupo etnico</button>
            <br />
            <input
              type="text"
              className="form-control"
              name="paternallastname:"
              onChange={this.handleChange}
            />
            <br />

            <br />
            <label>OCUPATION:</label>
            <br />
            <input
              type="text"
              className="form-control"
              name="paternallastname:"
              onChange={this.handleChange}
            />
            <br />

            <br />
            <label>birthdate::</label>
            <br />
            <input
              type="date"
              className="form-control"
              name="paternallastname:"
              onChange={this.handleChange}
            />
            <br />

            <br />
            <div>
            <label>DIRECCION:</label>
            <br />
            <label>calle </label>
            <input
              type="text"
              className="form-control"
              name="mainstreet:"
              onChange={this.handleChange}
            />
            <label>district: </label>
            <input
              type="text"
              className="form-control"
              name="district"
              onChange={this.handleChange}
            />
            <label>region: </label>
            <input
              type="text"
              className="form-control"
              name="region"
              onChange={this.handleChange}
            />
            <br />
            </div>
            <button className="btn btn-primary" onClick={()=> this.registPerson()}>Registrar Persona</button>
          </div>
        );
    }
}



export default RegisterPacient;