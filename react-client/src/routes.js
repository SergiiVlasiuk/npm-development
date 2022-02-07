import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import { AuthPage } from './pages/AuthPage'
import HomePage from './pages/HomePage'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/about" element={<AboutPage />} exact />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    )
  }
  return (
    <Routes>
      {/* <Route path="/" element={<HomePage />} exact /> */}
      {/* <Route path="/about" element={<AboutPage />} exact /> */}
      <Route path="/" element={<AuthPage />} exact />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
