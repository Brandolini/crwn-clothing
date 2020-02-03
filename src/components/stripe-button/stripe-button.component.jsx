import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 	`pk_test_mF4HeOHwvB2aLJOK5nZMa1qu`;

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label="Pay Now" 
            name="CRWN Clothing" 
            billingAddress 
            shippingAddress 
            image='https://svgshare.com/i/CUz.svg'
            amount={priceForStripe} 
            panelLabel='Pay Now'
            token={onToken}
            description={`Total is ${price}`}></StripeCheckout>
    )
}

export default StripeCheckoutButton;