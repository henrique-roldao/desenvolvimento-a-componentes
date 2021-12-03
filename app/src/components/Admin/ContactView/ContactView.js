import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Api from '../../../Api';
import { getToken } from '../../../Auth';
import SearchBar from '../../commons/SearchBar'

function ContactView() {
  const [contacts, setContacts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    Api.get('/contacts', 
      {
        params : {},
        headers : {
          Authorization : "Bearer " + getToken()
        }
      }
    )
    .then((response) => {
      setContacts(response.data);
    })
  }, []);

  const handleClickReponse = (idContact) => {
    history.push(`/admin/contact/response/${idContact}`)
  }

  const handleClickDelete = (idContact) => {
    Api.delete(`/contacts/${idContact}`, 
      {},
      {
        headers: {
          Authorization: "Bearer " + getToken()
        }
      }
    )
    .then(() => {
      history.push('/admin/contact/view');
      window.location.reload(true);
    })
  }

  return(
    <div className="row">
      <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <h1>Lista de contatos</h1>
          <SearchBar path="/contacts/search" handle={(data) => {setContacts(data)}} />
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Mensagem</th>
                <th>Status</th>
                <th colSpan="2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => 
                <tr key={index}>
                  <td>{contact.idContact}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>
                  <td>{contact.status}</td>
                  <td>
                    <button onClick={() => handleClickReponse(contact.idContact)} 
                    className="btn btn-primary">
                      Responder
                    </button>
                  </td>
                  <td>
                  <button onClick={() => handleClickDelete(contact.idContact)} 
                    className="btn btn-danger">
                      Deletar
                    </button>
                    </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      <div className="col-sm-1"></div>
    </div>
  );
}

export default ContactView;