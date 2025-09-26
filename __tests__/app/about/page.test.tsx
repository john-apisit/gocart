import '@testing-library/jest-dom'
import AboutPage from '@/app/about/page'
import { render, screen } from '@testing-library/react'

describe('AboutPage', () => {
  it('should render the about page with correct title', () => {
    render(<AboutPage />)
    
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByText(/lorem ipsum dolor sit amet consectetur adipisicing elit/i)).toBeInTheDocument()
  })

  it('should have correct styling classes', () => {
    render(<AboutPage />)
    
    const heading = screen.getByRole('heading', { name: /about/i })
    const paragraph = screen.getByText(/lorem ipsum dolor sit amet consectetur adipisicing elit/i)
    
    expect(heading).toHaveClass('text-2xl', 'font-bold')
    expect(paragraph).toHaveClass('text-gray-500')
  })

  it('should render within max-width container', () => {
    render(<AboutPage />)
    
    const container = screen.getByRole('heading', { name: /about/i }).closest('div')
    expect(container).toHaveClass('max-w-5xl', 'mx-auto')
  })
})

