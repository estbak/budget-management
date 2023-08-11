import {useState, useEffect} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const BudgetControl = ({gastos, setGastos, presupuesto, setPresupuesto, setIsValidBudget}) => {

    const [porcentaje, setPorcentaje] = useState(0)
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
        const totalDisponible = presupuesto - totalGastado
        // Calcular porcentaje gastado
        const nvoPorcentaje = (((presupuesto-totalDisponible)/presupuesto)*100).toFixed(2)

        setDisponible(totalDisponible)
        setGastado(totalGastado)
        setTimeout(() => {
            setPorcentaje(nvoPorcentaje)
        }, 1000);
    }, [gastos])
    

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    const handleResetApp = () => {
        const resultado = confirm('Do you want to reset budget and expenses?')

        if (resultado) {
            setGastos([])
            setPresupuesto(0)
            setIsValidBudget(false)
        }
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <CircularProgressbar 
                styles={buildStyles({
                    pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                    trailColor: '#F5F5F5',
                    textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6'

                })} 
                value={porcentaje}
                text={`${porcentaje}% Spent`}
            />
        </div>
        <div className="contenido-presupuesto">
            <button className='reset-app' type='button' onClick={handleResetApp}>
                Reset app
            </button>
            <p>
                <span>Budget: </span>{formatearCantidad(presupuesto)}
            </p>
            <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                <span>Available: </span>{formatearCantidad(disponible)}
            </p>
            <p>
                <span>Spent: </span>{formatearCantidad(gastado)}
            </p>
        </div>
    </div>
  )
}

export default BudgetControl