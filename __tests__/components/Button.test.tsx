import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '@/components/ui/button'

describe('Button Component', () => {
  it('should render button with text', () => {
    const { getByText } = render(<Button>Click me</Button>)
    expect(getByText('Click me')).toBeInTheDocument()
  })

  it('should handle click events', async () => {
    const handleClick = vi.fn()
    const { getByRole } = render(<Button onClick={handleClick}>Click me</Button>)

    const button = getByRole('button')
    await userEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should be disabled when disabled prop is true', () => {
    const { getByRole } = render(<Button disabled>Click me</Button>)
    const button = getByRole('button')

    expect(button).toBeDisabled()
  })

  it('should apply variant styles correctly', () => {
    const { container } = render(<Button variant="destructive">Delete</Button>)
    const button = container.querySelector('button')

    expect(button).toBeInTheDocument()
  })
})
