import { useEffect, useState } from "react"
import Clients from "./Clients";

interface Clients {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    since: string,
    _v: number

}
const Home = () => {
    const [clients, setClients] = useState<Clients[]>([])
    const url = 'http://localhost:3000/clients';

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'mode': 'no-cors',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setClients(data)
            })

            .catch(error => {
                console.log(error);
            })
    }, [])
    return (
        <main className="home">
            <h1>Clientes</h1>
            <div className="info">
                <p>Nome</p>
                <p>Email</p>
                <p>Cliente desde</p>
                <p>Editar</p>
                <p>Excluir</p>
            </div>
            {
                clients.map((item, index) => (
                    <div key={index}>
                        <Clients firstName={item.firstName} lastName={item.lastName} email={item.email} since={item.since} />
                    </div>
                ))
            }
        </main>
    )
}

export default Home