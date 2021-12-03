import React, { useState, useEffect }from 'react';
import { useHistory } from 'react-router';
import Api from '../../../Api';
import { getToken } from '../../../Auth';

export default function ClientView() {

    const [client, setClients] = useState([]);
    const history = useHistory();

    useEffect(() => {
        Api.get(
            '/clients',
            {
                params : {},
                headers : {
                    Authorization : 'Bearer ' + getToken()
                }
            }
        )
        .then((response) => {
            setClients(response.data)
        })
    }, []);

    const handleAddButton = () => {
        history.push('/admin/client/add')
    }

    return (
        <div className="row">
        <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <h1>Lista de clientes</h1>
            <button className="btn btn-primary mb-3" onClick={handleAddButton}>Adicionar Cliente</button>
            <table className="table table-striped">
              <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Endereço</th>
                </tr>
              </thead>
              <tbody>
                  {client.map((client) => 
                    <tr key={client.idClient}>
                        <td>{client.idClient}</td>
                        <td>{client.name}</td>
                        <td>{client.email}</td>
                        <td>{client.phone}</td>
                        <td>{client.address}</td>
                    </tr>
                  )}
              </tbody>
            </table>
          </div>
        <div className="col-sm-1"></div>
      </div>
    )
}