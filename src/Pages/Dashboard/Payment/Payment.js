
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
// import { loadStripe,Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51K7E1sJiVc4Eog3rci9TTn9dvp9lFOM8WwyFpGHdFSdnui98zbRZyOKbZENkxp9WmpQWbtUk4a7f5O5xXGp2MYrT00GzqEDM0k')

const Payment = () => {
    const { paymentId } = useParams()
    const [payment, setPayment] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${paymentId}`)
            .then(res => res.json())
            .then(data => setPayment(data))
    }, [paymentId])
    return (
        <div>
            <h1>Please pay for {payment.carName}</h1>
            <h4>pay:{payment.Price}</h4>
            {
                payment.Price && <Elements stripe={stripePromise}>
                    <CheckoutForm
                        payment={payment}
                    />
                </Elements>
            }

        </div>
    );
};

export default Payment;