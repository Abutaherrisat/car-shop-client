import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';
import useAuth from '../../../Hooks/useAuth'
import { CircularProgress } from '@mui/material';

const CheckoutForm = ({ payment }) => {
    const { Price, clientName, _id } = payment;
    const { user } = useAuth()
    const stripe = useStripe()
    const elements = useElements()

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('')
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ Price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
    }, [Price]);
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            setError(error.message)
        }
        else {
            setError('')
            console.log(paymentMethod);
        }
        //   payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: clientName,
                        email: user.email
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message);
            setSuccess('');
        }
        else {
            setError('');
            setSuccess('Your payment processed successfully.')
            console.log(paymentIntent);
            setProcessing(false);
            // save to database
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
            }
            const url = `http://localhost:5000/orders/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data));
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {processing ? <CircularProgress></CircularProgress> : <button type="submit" disabled={!stripe || success}>
                    Pay ${Price}
                </button>}
            </form>
            {
                error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
            }
            {
                success && <p style={{ color: 'green' }}>{success}</p>
            }

        </div>
    );
};

export default CheckoutForm;