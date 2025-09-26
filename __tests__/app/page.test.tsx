import '@testing-library/jest-dom'
import HomePage from '@/app/page'
import { render, screen } from '@testing-library/react'

jest.mock('@/features/home/Banner', () => () => <div data-testid="banner">MOCK_BANNER</div>)
jest.mock('@/features/products/PopularProducts', () => () => <div data-testid="popular-products">MOCK_POPULAR_PRODUCTS</div>)
jest.mock('@/features/products/FeaturedProducts', () => () => <div data-testid="featured-products">MOCK_FEATURED_PRODUCTS</div>)
jest.mock('@/features/home/SubscribeNow', () => () => <div data-testid="subscribe-now">MOCK_SUBSCRIBE_NOW</div>)

describe('HomePage', () => {
  it('should render the home page with all components', () => {
    render(<HomePage />)
    
    expect(screen.getByTestId('banner')).toBeInTheDocument()
    expect(screen.getByTestId('popular-products')).toBeInTheDocument()
    expect(screen.getByTestId('featured-products')).toBeInTheDocument()
    expect(screen.getByTestId('subscribe-now')).toBeInTheDocument()
  })

  it('should render components in correct order', () => {
    render(<HomePage />)
    
    const container = screen.getByTestId('banner').closest('div')
    const children = Array.from(container?.children || [])
    
    expect(children[0]).toHaveAttribute('data-testid', 'banner')
    expect(children[1]).toHaveAttribute('data-testid', 'popular-products')
    expect(children[2]).toHaveAttribute('data-testid', 'featured-products')
    expect(children[3]).toHaveAttribute('data-testid', 'subscribe-now')
  })

  it('should have correct container styling', () => {
    render(<HomePage />)
    
    const container = screen.getByTestId('banner').closest('div')
    expect(container).toHaveClass('min-h-screen', 'max-w-5xl', 'mx-auto')
  })

  it('should render all mock components with correct text content', () => {
    render(<HomePage />)
    
    expect(screen.getByText('MOCK_BANNER')).toBeInTheDocument()
    expect(screen.getByText('MOCK_POPULAR_PRODUCTS')).toBeInTheDocument()
    expect(screen.getByText('MOCK_FEATURED_PRODUCTS')).toBeInTheDocument()
    expect(screen.getByText('MOCK_SUBSCRIBE_NOW')).toBeInTheDocument()
  })
})
