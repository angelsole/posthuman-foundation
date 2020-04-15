import React from "react"
import 'typeface-roboto';

import MainLayout from '../components/MainLayout';
import Hero from '../components/Hero';
import MainObjectives from "../components/MainObjectives";

import '../assets/css/global.css';

export default () => (
  <MainLayout>
    <Hero />
    <MainObjectives />
  </MainLayout>
)
