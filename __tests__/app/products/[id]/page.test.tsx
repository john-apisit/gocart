import '@testing-library/jest-dom'
import ProductDetailPage from '@/app/products/[id]/page'
import { render, screen } from '@testing-library/react'
import { notFound } from 'next/navigation'

// Mock the product model
const mockProduct = {
  id: '1',
  name: 'Test Product',
  price: 99.99,
  image: ['/test-image.jpg'],
  description: 'Test product description',
  category: 'test-category',
  rating: 4.5,
  reviews: 10,
}

const mockProducts = [mockProduct]

jest.mock('@/features/products/model', () => ({
  mockProducts,
}))

// Mock child components
jest.mock('@/features/products/ProductDetail', () => ({ product }: { product: any }) => (
  <div data-testid="product-detail" data-product-id={product.id}>
    MOCK_PRODUCT_DETAIL
  </div>
))

jest.mock('@/features/products/ProductDetailImage', () => ({ 
  productName, 
  imageUrl 
}: { 
  productName: string; 
  imageUrl: string 
}) => (
  <div data-testid="product-detail-image" data-product-name={productName} data-image-url={imageUrl}>
    MOCK_PRODUCT_DIMAGE
  </div>
))

// Mock next/navigation
jest.mock('next/navigation', () => ({
  notFound: jest.fn(() => <div data-testid="not-found">NOT_FOUND</div>),
}))

describe('ProductDetailPage', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render product detail page for valid product id', async () => {
    const params = Promise.resolve({ id: '1' })
    
    const component = await ProductDetailPage({ params })
    render(component)
    
    expect(screen.getByTestId('product-detail')).toBeInTheDocument()
    expect(screen.getByTestId('product-detail-image')).toBeInTheDocument()
    expect(screen.getByText('MOCK_PRODUCT_DETAIL')).toBeInTheDocument()
    expect(screen.getByText('MOCK_PRODUCT_DIMAGE')).toBeInTheDocument()
  })

  it('should pass correct props to ProductDetail component', async () => {
    const params = Promise.resolve({ id: '1' })
    
    const component = await ProductDetailPage({ params })
    render(component)
    
    const productDetail = screen.getByTestId('product-detail')
    expect(productDetail).toHaveAttribute('data-product-id', '1')
  })

  it('should pass correct props to ProductDetailImage component', async () => {
    const params = Promise.resolve({ id: '1' })
    
    const component = await ProductDetailPage({ params })
    render(component)
    
    const productImage = screen.getByTestId('product-detail-image')
    expect(productImage).toHaveAttribute('data-product-name', 'Test Product')
    expect(productImage).toHaveAttribute('data-image-url', '/test-image.jpg')
  })

  it('should render not found for invalid product id', async () => {
    const params = Promise.resolve({ id: 'invalid-id' })
    
    const component = await ProductDetailPage({ params })
    render(component)
    
    expect(notFound).toHaveBeenCalled()
    expect(screen.getByTestId('not-found')).toBeInTheDocument()
    expect(screen.getByText('NOT_FOUND')).toBeInTheDocument()
  })

  it('should have correct container styling', async () => {
    const params = Promise.resolve({ id: '1' })
    
    const component = await ProductDetailPage({ params })
    render(component)
    
    const container = screen.getByTestId('product-detail').closest('div')
    expect(container).toHaveClass('max-w-5xl', 'mx-auto', 'py-8')
  })

  it('should have correct grid layout', async () => {
    const params = Promise.resolve({ id: '1' })
    
    const component = await ProductDetailPage({ params })
    render(component)
    
    const gridContainer = screen.getByTestId('product-detail').closest('.grid')
    expect(gridContainer).toHaveClass('grid', 'grid-cols-3', 'gap-8')
  })

  it('should handle async params correctly', async () => {
    const params = Promise.resolve({ id: '1' })
    
    // Test that the component can handle the async params
    const component = await ProductDetailPage({ params })
    expect(component).toBeDefined()
    
    render(component)
    expect(screen.getByTestId('product-detail')).toBeInTheDocument()
  })
})

