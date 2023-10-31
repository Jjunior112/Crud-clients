
const Clients = ({ firstName, lastName, email, since }) => {
    return (
        <div>

            <div className="clients">
                <p>{firstName} {lastName}</p>
                <p>{email}</p>
                <p>{since}</p>
                <p><button>Editar</button></p>
                <p><button>Excluir</button></p>
                
            </div>
        </div>
    )
}

export default Clients