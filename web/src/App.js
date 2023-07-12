import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import './App.css';
import { Elements, CardElement} from "@stripe/react-stripe-js";

const stripePromise = loadStripe('pk_test_51NQhpWCCz0sjgIs34u8559B3ANiDORgh5CEB3MvbwEIlYWeTwVf0H7zkXWY4TcO1AA6AfPVX9I6zKMFRiGSGiX0Z009I9z7H9T');

const CheckoutForm = () => {
  return <form>
    <CardElement/>
  </form>
}

function App() {
  return (
      <Elements stripe={stripePromise}>
        <CheckoutForm/>
      </Elements>

  );
}

export default App;
