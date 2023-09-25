import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loading } from './Loading/Loading';
import { Stepper } from './Stepper/Stepper';

export const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Loading />} />
            <Route path='/stepper' element={<Stepper />} />
        </Routes>
    </div>
  )
}
