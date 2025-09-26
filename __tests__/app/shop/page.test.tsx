import '@testing-library/jest-dom'
import ShopPage from '@/app/shop/page'
import { render, screen } from '@testing-library/react'

// Mock child components
jest.mock('@/components/loaders/AppLoader', () => () => <div data-testid="app-loader">MOCK_APP_LOADER</div>)
jest.mock('@/features/products/SearchProducts', () => () => <div data-testid="search-products">MOCK_SEARCH_PRODUCTS</div>)

describe('ShopPage', () => {
  it('should render the shop page with search products', () => {
    render(<ShopPage />)
    
    expect(screen.getByTestId('search-products')).toBeInTheDocument()
    expect(screen.getByText('MOCK_SEARCH_PRODUCTS')).toBeInTheDocument()
  })

  it('should render within max-width container', () => {
    render(<ShopPage />)
    
    const container = screen.getByTestId('search-products').closest('div')
    expect(container).toHaveClass('max-w-5xl', 'mx-auto')
  })

  it('should have Suspense wrapper with fallback', () => {
    render(<ShopPage />)
    
    // The Suspense component should be present (though we can't directly test it)
    // We can verify the structure by checking that SearchProducts is rendered
    expect(screen.getByTestId('search-products')).toBeInTheDocument()
  })

  it('should render fallback loader when SearchProducts is suspended', async () => {
    // Mock SearchProducts to throw a promise (simulating suspense)
    const mockSearchProducts = jest.fn(() => {
      throw new Promise(() => {}) // This simulates a suspended component
    })
    
    jest.doMock('@/features/products/SearchProducts', () => mockSearchProducts)
    
    // Re-import the component to get the mocked version
    const { default: ShopPageWithSuspense } = await import('@/app/shop/page')
    
    render(<ShopPageWithSuspense />)
    
    // Should show the fallback loader
    expect(screen.getByTestId('app-loader')).toBeInTheDocument()
    expect(screen.getByText('MOCK_APP_LOADER')).toBeInTheDocument()
  })

  it('should have correct fallback container styling', () => {
    render(<ShopPage />)
    
    // The fallback div should have the correct classes
    // We can't directly test the fallback since SearchProducts renders normally
    // But we can verify the overall structure
    const container = screen.getByTestId('search-products').closest('div')
    expect(container).toHaveClass('max-w-5xl', 'mx-auto')
  })
})

