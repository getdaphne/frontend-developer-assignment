import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders Daphne logo', () => {
    render(<App />)
    expect(screen.getByAltText('Daphne')).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(<App />)
    expect(screen.getByText('Email Recipient Management System')).toBeInTheDocument()
  })

  it('renders start building message', () => {
    render(<App />)
    expect(screen.getByText('Start Building')).toBeInTheDocument()
  })
})
