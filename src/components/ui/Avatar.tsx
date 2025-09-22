import Image from 'next/image';
import { cn } from '@/lib/cn';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
}

export function Avatar({ className, src, alt, ...props }: AvatarProps) {
  return (
    <div className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)} {...props}>
      {src ? <Image src={src} alt={alt || ''} fill className="aspect-square object-cover" /> : <div className="bg-muted" />}
    </div>
  );
}