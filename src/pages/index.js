import React from "react"
import 'typeface-roboto';

import MainLayout from '../components/MainLayout';
import Hero from '../components/Hero';

import '../assets/css/global.css';

export default () => (
  <MainLayout>
    <Hero />
    <div>
      <h2>Aqui empieza un nuevo div</h2>
    </div>
  </MainLayout>
)
