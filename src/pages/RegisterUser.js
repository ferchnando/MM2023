import { render } from "@testing-library/react";
import { useState } from 'react';
import React, {Component}  from "react";
import Axios from "axios";
import Swal from 'sweetalert2';

function RegUser(){


const [name, setIName]= useState("");
const [surnmane, setSurname]= useState("");
const [email, setEmail]= useState("");
const [phonenumber, setPhoneNumber]= useState("");
const [role, setRole]= useState("");
const [image, setImage]= useState("");

    const registrarUsuario =()=>{
        Axios.post("http://localhost:3000/api/v1/registerUser",{
       
           name:name,
           surname:surnmane,
           email:email,
           phonenumber:phonenumber,
           role:role,
           image:image,
        }).then(()=>{
            Swal.fire({
            title: "<strong>Registro Exitoso!</strong>",
            html: "<i>Se creo el USUARIO<strong>"+name+ " </strong>fue registrado con éxito!</i>",
            icon: 'success',
            timer:2000
            }).catch(function(error){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se logró Crear el Usuario!',
                footer: error.AxiosError
                })
            });
            });
}

    return(
        <div>

        </div>
    );
       
}
export default RegisterUser;