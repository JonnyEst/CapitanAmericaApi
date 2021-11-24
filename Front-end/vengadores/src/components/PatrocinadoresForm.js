import React from 'react';

const PatrocinadoresForm = ({patrocinador, setPatrocinador}) => {

    const handleChange = e => {
        setPatrocinador({
            ...patrocinador,
            [e.target.name]: e.target.value
        })
    }

    let{nombre} = patrocinador

    const handleSubmit = () => {
        //validación de los datos
        if (nombre === '' ) {
            alert('Todos los campos son obligatorios')
            return
        }

        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(patrocinador)
        }
        fetch('http://localhost:3200/api/patrocinadores', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setPatrocinador({
            nombre: ''
        })



    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input value={nombre} name="nombre" onChange={handleChange} type="text" id="nombre" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}
 
export default PatrocinadoresForm;