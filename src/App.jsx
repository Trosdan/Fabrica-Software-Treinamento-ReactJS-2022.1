import React, { useState } from 'react';
import { useEffect } from 'react';
import "./style.css";

function App() {
	const [inputMensagem, setInputMensagem] = useState("");
	const [mensagens, setMensagens] = useState([
		"Segunda mensagem", "Primeira mensagem"
	]);

	function enviarFormulario(event) {
		event.preventDefault();
		setMensagens([inputMensagem, ...mensagens]);
	}

	function alterarInputNome(event) {
		setInputMensagem(event.target.value);
	}
	
	useEffect(() => {
		document.title = `Feed - ${mensagens.length}`;
	}, [mensagens.length])

	return (
		<div className='container'>
			<form className='form_container' onSubmit={enviarFormulario} >
				<input className='input' type="text" onChange={(e) => alterarInputNome(e)} />
				<button className='button' type='submit' >SALVAR</button>
			</form>
			<div className='mensagem_container'>
				{mensagens.map((mensagem, index) => {
					return (<p className='mensagem' key={index} >{mensagem}</p>)
				})}
			</div>
		</div>
	)


}

export default App;