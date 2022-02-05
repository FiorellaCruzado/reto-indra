import React from 'react';
import { useState } from 'react/cjs/react.development';
import { useForm } from 'react-hook-form';

const InsuranceAmount = ({value = 12500}) => {
    const [amount, setAmount] = useState(value);

    const handleAdd = () => {
        if (amount + 100 < 16500){
            setAmount(amount + 100)
        }
    }

    const handleSubtract = () => {
        if (amount - 100 > 12500){
            setAmount(amount - 100)
        }
    }

    return (
        <div className="insurance grid">
            <div className='grid-7'>
                <div className='insurance__title'>Indica la suma asegurada</div>
                <div className='d-flex'>
                    <div className='insurance__details insurance__details--first'>MIN $12,500</div>
                    <div className='insurance__details insurance__details--second'>MAX $16,500</div>
                </div>
            </div>

            <div className='insurance__amount grid-5 grid'>
                <div className="insurance__div grid-3 pointer" onClick={handleSubtract}>
                    <img src="%PUBLIC_URL%/../images/gl_remove.svg" alt="" />
                </div>
                <div className="insurance__div grid-6">$ {amount}</div>
                <div className="insurance__div grid-3 pointer" onClick={handleAdd}>
                    <img src="%PUBLIC_URL%/../images/gl_add.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default InsuranceAmount;