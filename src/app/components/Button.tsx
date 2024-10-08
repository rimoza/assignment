import React, { ReactNode, ButtonHTMLAttributes } from 'react'
import { LucideIcon } from 'lucide-react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  children: ReactNode
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  children,
  className,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary:
      'bg-white text-blue-500 hover:bg-blue-700 hover:text-white focus:ring-blue-500',
    secondary:
      'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
    accent: 'bg-gray-50 text-gray-800 border border-blue-600 text-white',
    outline: 'bg-gray-50 opacity-70 text-gray-500',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  }

  const buttonStyles = [
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth ? 'w-full' : '',
    className,
  ].join(' ')

  return (
    <button className={buttonStyles} {...props}>
      {Icon && iconPosition === 'left' && (
        <Icon size={iconSizes[size]} className='mr-2' />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon size={iconSizes[size]} className='ml-2' />
      )}
    </button>
  )
}

export default Button
