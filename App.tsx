import React from "react";
import Layout from './components/Layout'
import './styles/normalize.css'
import './styles/reset.css'
import './styles/global.css'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router } from "react-router-dom";
import Page from './pages/Index'
import { ThemeProvider, light } from 'camp-ui'


export default function App () {
  return <Router>
    <ThemeProvider theme={light}>
      <Layout leftContent={<Sidebar />} rightContent={<Page />}></Layout>
    </ThemeProvider>
  </Router>
}