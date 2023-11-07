import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    // url api
    const url = 'http://localhost:3000/clients';

    // states dos inputs

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [since, setSince] = useState('');
    const [message, setMessage] = useState('hide');

    // navegção entre as paginas

    const history = useNavigate()

    // funções

    const handlerDate = () => {




    }

    const register = (e) => {
        e.preventDefault()
        if (firstName && lastName && email && since) {
            const date = since.split('-');

            const newDate = `${date[2]}/${date[1]}/${date[0]}`

            const form = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                since: newDate,
            }

            fetch(url, {
                method: 'POST',
                headers: {
                    'mode': 'no-cors',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)

            })
                .then(() => {
                    setFirstName('')
                    setLastName('')
                    setEmail('')
                    setSince('')
                })
                .then(() => {
                    history('/', { state: { message: 'Cliente cadastro com sucesso!' } })
                })

                .catch(error => {
                    console.log(error);
                })
        }
        else {
            setMessage('empty')
        }
    }

    return (
        <div className="register">

            <h1>Cadastro de Novo Cliente</h1>

            <form>
                <label htmlFor="firstName">Nome</label>

                <input type="text" name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />


                <label htmlFor="lastName">Sobrenome</label>

                <input type="text" name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} required />

                <label htmlFor="email">Email</label>

                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label htmlFor="date">Data do cadastro</label>

                <input type="date" name="date" value={since} onChange={(e) => setSince(e.target.value)} required />

                <label className={message}>*Preencha todos os campos</label>

                <button type="submit" onClick={register}>Enviar</button>
            </form>
        </div>
    )
}

export default Register