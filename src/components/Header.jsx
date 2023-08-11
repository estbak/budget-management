//rafce
import React from 'react'
import NewBudget from './NewBudget'
import BudgetControl from './BudgetControl'

const Header = ({gastos, setGastos, presupuesto, setPresupuesto, isValidBudget, setIsValidBudget}) => {
  return (
    <header><h1>Budget Management</h1>
    {isValidBudget ? (<BudgetControl gastos={gastos} setGastos={setGastos} presupuesto={presupuesto}
                                     setPresupuesto={setPresupuesto} setIsValidBudget={setIsValidBudget} />) 
    : (<NewBudget presupuesto={presupuesto} setPresupuesto={setPresupuesto} 
                  setIsValidBudget={setIsValidBudget}/>)}
    
    </header>
  )
}

export default Header