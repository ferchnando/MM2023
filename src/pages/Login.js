import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { useAuth } from "../context/Auth";
import { API_BASE_URL } from '../config';

const baseUrl = API_BASE_URL + 'loginUser';


const Login = () => {
    const [username, setUsername] = useState("");
    const { setUser } = useAuth();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: '',
        password: '',
        gethash: 'x',
    });
    const [error, setError] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
        setError(false);
    };

    const login = useCallback(
        async (e) => {
            e.preventDefault();

            try {
                console.log(form);
                const loginResponse = await axios.post(baseUrl, form);
                console.log(loginResponse);
                if (loginResponse.data.token) {
                    setUser( loginResponse.data.token );
                    navigate("/NewPatient");
                } else {
                    setError(true); // Error de autenticación
                }
            } catch (error) {
                setError(true); // Error de autenticación
            }
        },
        [setUser, form, username]
    );

    const { email, password } = form;
    const emailClassName = error ? 'form-control is-invalid' : 'form-control';
    const passwordClassName = error ? 'form-control is-invalid' : 'form-control';

    return (
        <div className="containerPrincipal">
            <div className="containerSecundario">
                <div className="form-group">
                    <label>Email: </label>
                    <br />
                    <input
                        type="text"
                        className={emailClassName}
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                    <br />
                    <label>Contraseña: </label>
                    <br />
                    <input
                        type="password"
                        className={passwordClassName}
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                    {error && <div className="invalid-feedback">Datos incorrectos</div>}
                    <br />
                    <button className="btn btn-primary" onClick={login}>
                        Iniciar Sesión
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;