import React from 'react';
import { useForm } from 'react-hook-form'
import Api from '../../Api';
import { useHistory } from 'react-router';

function Contact() {
  const {handleSubmit, register } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    Api.post('/contacts', {
      name: data.name,
      email: data.email,
      message: data.message
    })
    .then((response) => {
      console.log(response)
    })
    .catch((errors) => {
      console.log(errors)
    })
    .finally(() => {
      history.push('/contact/view')
    })
  }

  return(
    <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <h1>Contato</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Nome</label>
            <input
              {...register("name", { required: true })}
                className="form-control"
                type="text"
                name="name"/>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              {...register("email", { required: true })}
                className="form-control"
                type="email"
                name="email"/>
          </div>
          <div className="form-group">
            <label>Mensagem</label>
            <textarea
              {...register("message", { required: true })}
                className="form-control"
                type="text"
                name="message"/>
          </div>
            <button type="submit" className="btn btn-primary">Enviar</button> 
          </form>
        </div>
        <div className="col-sm-1"></div>
        </div>

  );
}

export default Contact;