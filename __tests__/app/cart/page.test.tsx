import '@testing-library/jest-dom'
import CartPage from '@/app/cart/page'
import { render, screen } from '@testing-library/react'

// Mock the cart store
const mockCartStore = {
  cartItems: [],
  getSubTotal: jest.fn(() => 0),
  discount: 0,
  shippingFee: 0,
  getTotal: jest.fn(() => 0),
  setCurrentTab: jest.fn(),
  currentTab: 'cart' as 'cart' | 'address' | 'payment',
}

jest.mock('@/features/carts/store/cartStore', () => ({
  useCartStore: () => mockCartStore,
}))

// Mock child components
jest.mock('@/components/buttons/AppButton', () => () => <div>MOCK_APP_BUTTON</div>)
jest.mock('@/features/carts/CartDetails', () => () => <div>MOCK_CART_DETAILS</div>)
jest.mock('@/features/carts/CartSummary', () => () => <div>MOCK_CART_SUMMARY</div>)
jest.mock('@/features/carts/CartTabs', () => ({
  __esModule: true,
  default: ({ currentTab, onChange }: { currentTab: string; onChange: (tab: string) => void }) => (
    <div data-testid="cart-tabs" data-current-tab={currentTab}>
      MOCK_CART_TABS
      <button onClick={() => onChange('address')}>Address Tab</button>
      <button onClick={() => onChange('payment')}>Payment Tab</button>
    </div>
  ),
}))
jest.mock('@/features/carts/PaymentMethod', () => () => <div>MOCK_PAYMENT_METHOD</div>)
jest.mock('@/features/carts/ShippingAddress', () => () => <div>MOCK_SHIPPING_ADDRESS</div>)

// Mock motion components
jest.mock('motion/react', () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}))

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  ChevronRightIcon: () => <div>MOCK_CHEVRON_ICON</div>,
}))

// Mock utils
jest.mock('@/utils/number', () => ({
  formatNumber: jest.fn((num: number) => num.toString()),
}))

describe('CartPage', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockCartStore.currentTab = 'cart'
  })

  it('should render the cart page with correct title', () => {
    render(<CartPage />)
    
    expect(screen.getByText('Your Shopping Cart')).toBeInTheDocument()
    expect(screen.getByText('Your Shopping Cart')).toHaveClass('text-xl', 'font-bold', 'my-8', 'text-gray-800')
  })

  it('should render cart tabs component', () => {
    render(<CartPage />)
    
    const cartTabs = screen.getByTestId('cart-tabs')
    expect(cartTabs).toBeInTheDocument()
    expect(cartTabs).toHaveAttribute('data-current-tab', 'cart')
  })

  it('should render cart details when current tab is cart', () => {
    mockCartStore.currentTab = 'cart'
    render(<CartPage />)
    
    expect(screen.getByText('MOCK_CART_DETAILS')).toBeInTheDocument()
  })

  it('should render shipping address when current tab is address', () => {
    mockCartStore.currentTab = 'address'
    render(<CartPage />)
    
    expect(screen.getByText('MOCK_SHIPPING_ADDRESS')).toBeInTheDocument()
  })

  it('should render payment method when current tab is payment', () => {
    mockCartStore.currentTab = 'payment'
    render(<CartPage />)
    
    expect(screen.getByText('MOCK_PAYMENT_METHOD')).toBeInTheDocument()
  })

  it('should render cart summary', () => {
    render(<CartPage />)
    
    expect(screen.getByText('MOCK_CART_SUMMARY')).toBeInTheDocument()
  })

  it('should call setCurrentTab when tab is changed', () => {
    render(<CartPage />)
    
    const addressTab = screen.getByText('Address Tab')
    addressTab.click()
    
    expect(mockCartStore.setCurrentTab).toHaveBeenCalledWith('address')
  })

  it('should have correct container styling', () => {
    render(<CartPage />)
    
    const container = screen.getByText('Your Shopping Cart').closest('div')
    expect(container).toHaveClass('max-w-5xl', 'mx-auto', 'flex', 'flex-col', 'items-center')
  })
})
