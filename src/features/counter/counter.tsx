import useCounter from './counter.hook'
import React, { useState } from 'react'
import style from './counter.module.scss'

export default () => {
    const { count, increment, decrement, incrementByAmount, incrementAsync } = useCounter()
    const [amount, setAmount] = useState('2');
    return (
        <div>
            <div className={style.row}>
                <button className={style.button}
                    onClick={() => increment()}
                >+</button>
                <span className={style.value}>{count}</span>
                <button className={style.button} onClick={() => decrement()}>
                    -
            </button>
            </div>
            <div className={style.row}>
                <input
                    className={style.textbox}
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                />
                <button
                    className={style.button}
                    onClick={() => incrementByAmount(Number(amount) || 0)
                    }
                >
                    Add Amount
                </button>
                <button
                    className={style.asyncButton}
                    onClick={() => incrementAsync.run(Number(amount) || 0)}
                >
                    Add Async
            </button>
            </div>
        </div>

    )
}