import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar}) => {

    const [mensaje, setMensaje] = useState('')
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [categoria, setCategoria] = useState('')
    const [fecha, setFecha] = useState('')
    const [id, setId] = useState('')


    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
    }, [])
    

    const ocultarModal = () => {
        setAnimarModal(false)
        setGastoEditar({})
        setTimeout(() => {
            setModal(false)
        }, 400);
    }

    const handleSubmit = e => {
        e.preventDefault()
        
        if ([nombre,cantidad,categoria].includes('')) {
            setMensaje('All fields are required')

            setTimeout(() => {
                setMensaje('')
            }, 3000);
            return
        }
        guardarGasto({nombre,cantidad,categoria,id, fecha})
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img src={CerrarBtn} alt="close modal" onClick={ocultarModal} />
        </div>

        <form onSubmit={handleSubmit} className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
            <legend>{gastoEditar.nombre ? 'Edit Expense' : 'New Expense'} </legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

            <div className="campo">
                <label htmlFor="nombre">Name</label>
                <input id="nombre" type="text" placeholder="Expense name" value={nombre} onChange={e => setNombre(e.target.value)} />
            </div>
            <div className="campo">
                <label htmlFor="cantidad">Amount</label>
                <input id="cantidad" type="number" placeholder="Add the amount" value={cantidad} onChange={e => setCantidad(Number(e.target.value))} />
            </div>
            <div className="campo">
                <label htmlFor="categoria">Category</label>
                <select name="" id="categoria" value={categoria} onChange={e => setCategoria(e.target.value)}>
                    <option value="">-- Select --</option>
                    <option value="Savings">Savings</option>
                    <option value="Health">Health</option>
                    <option value="Food">Food</option>
                    <option value="Home">Home</option>
                    <option value="Subscriptions">Subscriptions</option>
                    <option value="Leisure">Leisure</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                </select>
            </div>
            <input type="submit" value={gastoEditar.nombre ? 'Save changes' : 'Add expense'} />
        </form>
    </div>
  )
}

export default Modal