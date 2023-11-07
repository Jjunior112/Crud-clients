import { useState } from "react"



const Clients = ({ id, firstName, lastName, email, since }) => {

    const [confirmation, setConfirmation] = useState('hide');

    const showConfirm = () => {
        if (confirmation === 'hide') {
            setConfirmation('confirmation')
        }
        else {
            setConfirmation('hide')
        }
    }

    const deleteClient = () => {
        fetch(`http://localhost:3000/clients/${id}`, {
            method: 'DELETE',
        })
            .then(() => location.reload())

    }
    return (
        <div>

            <div className="clients">
                <p>{firstName} {lastName}</p>
                <p>{email}</p>
                <p>{since}</p>
                <p><button onClick={showConfirm}>Excluir</button></p>
                <div className={confirmation}>
                    <p>Tem certeza que deseja excluir o(a) cliente <span>{firstName} {lastName}</span>?</p>
                    <div>
                        <p>

                            <button onClick={deleteClient}>Confirmar</button>
                            <button onClick={showConfirm}>Cancelar</button>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Clients