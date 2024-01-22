import { useState } from "react";

const Formulario = ({ setResponse }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
    const [invalidEmail, setInvalidEmail] = useState(false);

    const regex = /[a-zA-Z0-9_]+@{1}[a-z]+(.com){1}/

	const onChangeName = (e) => { setName(e.target.value) };
	const onChangeEmail = (e) => { setEmail(e.target.value) };
	const onChangePassword = (e) => { setPassword(e.target.value)};
	const onChangeConfirmPassword = (e) => { setConfirmPassword(e.target.value) };

    const resetInputs = () => {
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    const onSubmit = (e) => {
        e.preventDefault()

        regex.exec(email) ? setInvalidEmail(false) : setInvalidEmail(true);

        if(name == "" || password != confirmPassword || invalidEmail ){
            setResponse({ status: '200', error: true });
            return
        }else{
            resetInputs();
            setResponse({ status: '200', error: false });
        }

    }

	return (
		<>
			<form onSubmit={ onSubmit }>
				<div className="d-grid gap-3">
					<input
						type="text"
						className="form-control"
						placeholder="Nombre"
						onChange={onChangeName}
                        value={name}
                        required
					/>
					<input
						type="email"
						className="form-control"
						placeholder="tuemail@ejemplo.com"
						onChange={onChangeEmail}
                        value={email}
                        required
					/>
					<input
						type="password"
						className="form-control"
						placeholder="Contraseña"
						onChange={onChangePassword}
                        value={password}
                        required
					/>
					<input
						type="password"
						className="form-control"
						placeholder="Confirma tu contraseña"
						onChange={onChangeConfirmPassword}
                        value={confirmPassword}
                        required
					/>
					<button type="submit" className="btn btn-outline-success">
						Registrarse
					</button>
				</div>
			</form>
		</>
	);
};

export default Formulario;
