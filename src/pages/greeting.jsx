import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/Greeting/greeting';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  return <h1>{greeting.greetings.message}</h1>;
};

export default Greeting;