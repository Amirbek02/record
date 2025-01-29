import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// Main container for the card
interface TestCardProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
  withLink?: boolean;
  isCarouselCard?: boolean;
}

const TestCard = React.forwardRef<HTMLDivElement, TestCardProps>(
  ({ className, children, href, withLink, isCarouselCard, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col gap-1 bg-white justify-center   cursor-pointer rounded-[30px] border pb-5 shadow-[0px_4px_4px_0px_#00000040]',
        className,
      )}
      {...props}>
      {children}
      {/* Embedded Button */}
      {withLink && href && (
        <div className="flex justify-start -mt-2 md:mt-2">
          <Link
            href={href}
            className={`underline font-bold cursor-pointer text-xs  md:underline-offset-[3px] lg:underline-offset-[6px] ml-7 ${
              isCarouselCard ? 'lg:text-sm' : 'lg:text-lg'
            }`}>
            Толук оку
          </Link>
        </div>
      )}
    </div>
  ),
);
TestCard.displayName = 'TestCard';

// Background section for an image
interface TestCardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc?: string; // Image source
  videoSrc?: string;
  children?: React.ReactNode; // Video source
}

const TestCardMedia = React.forwardRef<HTMLDivElement, TestCardMediaProps>(
  ({ className, imgSrc, videoSrc, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'w-full h-[225px] lg:h-[275px]  relative rounded-[6px] overflow-hidden transition-all duration-300 ease-in-out hover:border-[6px] hover:border-darkGrey',
        className,
      )}
      {...props}>
      {imgSrc && (
        <div
          className="z-10 absolute inset-0 bg-cover bg-center rounded-t-[30px]"
          style={{ backgroundImage: `url(${imgSrc})` }}
        />
      )}
      {videoSrc && (
        <iframe
          className="absolute inset-0 w-full h-full rounded-t-[30px] z-20 "
          src={`https://www.youtube-nocookie.com/embed/${videoSrc}?rel=0&modestbranding=1&showinfo=0`}
          title="YouTube video player"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          aria-hidden="true"
          sandbox="allow-same-origin allow-scripts"
          style={{ border: 'none', pointerEvents: 'none' }}
        />
      )}
      {children}
    </div>
  ),
);
TestCardMedia.displayName = 'TestCardMedia';

// Title section
const TestCardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        ' hover:bg-blue-600  lg:text-xl right-0 lg:right-[22px] bottom-[13px] px-3 py-1 flex justify-center items-center align-baseline  text-white font-bold bg-darkGrey rounded-[80px] absolute z-20 transition-all duration-300 ease-in-out',
        className,
      )}
      {...props}
    />
  ),
);
TestCardTitle.displayName = 'TestCardTitle';

// Subtitle or description title section
const TestCardSubtitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn('lg:text-xl pl-1 text-xs font-medium max-w-[358px] xl:min-h-[32px]', className)}
    {...props}
  />
));
TestCardSubtitle.displayName = 'TestCardSubtitle';

// Description text
const TestCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-xs lg:text-base px-1 text-[#25264170] font-medium', className)}
    {...props}></p>
));
TestCardDescription.displayName = 'TestCardDescription';

export { TestCard, TestCardMedia, TestCardTitle, TestCardSubtitle, TestCardDescription };
