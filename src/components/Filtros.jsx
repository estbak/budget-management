import {useState, useEffect} from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className="filtros sombra contenedor">
        <form>
            <div className='campo'>
                <label>Filter Expenses </label>
                <select value={filtro} onChange={e=>setFiltro(e.target.value)} >
                    <option value="">-- All categories --</option>
                    <option value="Savings">Savings</option>
                    <option value="Health">Health</option>
                    <option value="Food">Food</option>
                    <option value="Home">Home</option>
                    <option value="Subscriptions">Subscriptions</option>
                    <option value="Leisure">Leisure</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                </select>
            </div>

        </form>
    </div>
  )
}

export default Filtros