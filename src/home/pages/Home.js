import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'


import { updateHomeWeatherDetails } from '../../tools/fetchFunction';
import Modal from '../../shared/components/UIElements/Modal';
import CardHome from '../components/CardHome';
import './Home.css';

const Home = () => {
  const [errorState, setErrorState] = useState(false);
  const [errorMessageState, setErrorMessageState] = useState(false);
  const cityName = useParams().cityName;
  const dispatch = useDispatch();
  const history = useHistory();

  const cancelErrorHandler = () => {
    setErrorState(false);
    history.push("/tel aviv");
  }
  useEffect(() => {
    (async () => {
      const res = await updateHomeWeatherDetails(cityName, dispatch)
      if (res) {
        setErrorState(true);
        setErrorMessageState(res.errorMessage);
      }
    })();
  }, [cityName, dispatch])

  return <React.Fragment>
    <Modal show={errorState} onCancel={cancelErrorHandler} header={'ERROR!!!'} footer={<h2>
      {errorMessageState}
    </h2>} />
    <CardHome />
  </React.Fragment>
};

export default Home;
