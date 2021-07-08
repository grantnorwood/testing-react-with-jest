// @ts-nocheck
import React, {useContext} from 'react'
import { AppContext } from '../../App'
import { formatUSCurrency } from '../../utils/currency'

export const balanceUnavailableMessage = 'Your balance is unavailable.'

const Balance: React.FC = () => {
  // Context
  const { state } = useContext(AppContext)

  return (<>
    <h1>Current Balance</h1>

    {state.account?.balance &&
      <p>This little piggy has <strong className="currency">{formatUSCurrency(state.account?.balance)}</strong> in the bank.</p>
    }

    {!state.account?.balance &&
      <p>{balanceUnavailableMessage}</p>
    }
  </>)
}

export default Balance
