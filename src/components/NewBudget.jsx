import {useState} from 'react'
import Mensaje from './Mensaje'

const NewBudget = ({presupuesto, setPresupuesto, setIsValidBudget}) => {

  const [mensaje, setMensaje] = useState('')  

  const handlePresupuesto = (e) => {
    e.preventDefault()

    if(!presupuesto || presupuesto < 0) {
        setMensaje('Invalid budget')
        return
    } 
    setMensaje('')
    setIsValidBudget(true)
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form onSubmit={handlePresupuesto} className="formulario">
            <div className="campo">
                <label>Define Budget</label>
                <input className="nuevo-presupuesto" value={presupuesto} type="number" placeholder="Add your budget"
                       onChange={e=>setPresupuesto(Number(e.target.value))} />
            </div>
            <input type="submit" value="Add" />
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
    </div>
  )
}

export default NewBudget