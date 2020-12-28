import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I33qQAkHldCb0w1u2DfOEzI4cskPOJj14bTpLlkspBzugoS1IhtzpozzpA4wtUnNq8ODse5B3qjNRoR9xt6mhmn00bncv8pKX'
    const onToken = token => {
        console.log(token)
        alert('Payment Successful');
    }
    return ( 
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
     );
}
 
export default StripeCheckoutButton;