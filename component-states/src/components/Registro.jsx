import { useState } from "react";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";

const Registro = () => {
    const [response, setResponse] = useState({ status: '-', error: false });

	const icons = ["fa-facebook", "fa-linkedin", "fa-github"];

    const message = response.error ? 'Debes revisar los campos' : 'Cuenta creada con éxito!';

	return (
		<>
			<div className="container justify-content-center align-items-center w-25 border border-3 border-white bg-white text-bg-light py-5 px-4 rounded-3">
				<div className="row mb-3">
					<h2>Crea una cuenta</h2>
				</div>
				<div className="row justify-content-evenly mb-2">
					{icons.map((icon, key) => (
						<div key={key} className="col-2 text-center p-0">
							<SocialButton icon={icon} />
						</div>
					))}
				</div>
				<p>o usa tu email para registrarte</p>
				<div className="row">
					<Formulario setResponse={ setResponse } />
				</div>
                <span className="row">
                    <Alert response={ response } message={ message }/> 
                </span>
			</div>
		</>
	);
};

export default Registro;
