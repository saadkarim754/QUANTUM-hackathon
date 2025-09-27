import { cn } from '@/lib/utils';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = true,
  ...props 
}) => {
  const baseStyles = 'rounded-xl p-6 transition-all duration-300';
  
  const variants = {
    default: 'bg-white/5 backdrop-blur-sm border border-white/10',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20 shadow-xl',
    solid: 'bg-white shadow-lg text-gray-800',
    gradient: 'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20'
  };

  const hoverStyles = hover ? 'hover:bg-white/10 hover:border-white/30 hover:shadow-2xl hover:scale-[1.02]' : '';

  const classes = cn(
    baseStyles,
    variants[variant],
    hoverStyles,
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;