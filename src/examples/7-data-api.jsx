import { useState } from 'react';
import axios from 'axios';

const url = 'https://us-west-2.aws.data.mongodb-api.com/app/data-kwraj/endpoint/data/v1/action/find';
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState('random dad joke');

  const fetchDadJoke = async () => {
    try {
      const { data } = await axios(url, {
        headers: {
          Accept: 'application/json',
          api_key: 'VuRdl2H93rdLPGTS9bcWcfWm4f3Y6nf7tyv2pUsf4bG9cm1eFq0zTg1R4po3WnXd',
            Access
        },
      });
      setJoke(data.joke);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchDadJoke}>
        random joke
      </button>
      <p className='dad-joke'>{joke}</p>
    </section>
  );
};
export default Headers;