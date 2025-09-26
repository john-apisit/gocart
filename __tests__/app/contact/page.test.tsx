import '@testing-library/jest-dom'
import ContactPage from '@/app/contact/page'
import { render, screen } from '@testing-library/react'

describe('ContactPage', () => {
  it('should render the contact page with correct title', () => {
    render(<ContactPage />)
    
    expect(screen.getByRole('heading', { name: /contact/i })).toBeInTheDocument()
    expect(screen.getByText(/lorem ipsum dolor sit amet consectetur adipisicing elit/i)).toBeInTheDocument()
  })

  it('should have correct styling classes', () => {
    render(<ContactPage />)
    
    const heading = screen.getByRole('heading', { name: /contact/i })
    const paragraph = screen.getByText(/lorem ipsum dolor sit amet consectetur adipisicing elit/i)
    
    expect(heading).toHaveClass('text-2xl', 'font-bold')
    expect(paragraph).toHaveClass('text-gray-500')
  })

  it('should render within max-width container', () => {
    render(<ContactPage />)
    
    const container = screen.getByRole('heading', { name: /contact/i }).closest('div')
    expect(container).toHaveClass('max-w-5xl', 'mx-auto')
  })
})

