import Link from 'next/link';

interface ButtonProps {
  href: string;
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
}

export default function Button({ href, variant, children }: ButtonProps) {
  const baseStyles = 'inline-block px-12 md:px-14 py-4 md:py-5 text-xs md:text-sm tracking-[0.25em] uppercase font-bold transition-all duration-600 relative overflow-hidden group';
  
  const variants = {
    primary: 'bg-gradient-to-br from-gold to-gold-dark text-noir clip-path-button hover:shadow-gold hover:-translate-y-1',
    secondary: 'border-2 border-gold text-gold clip-path-button hover:text-noir',
  };

  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]}`}>
      {variant === 'secondary' && (
        <span className="absolute inset-0 bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-600 -z-10" />
      )}
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
