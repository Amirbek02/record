import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/UI/button";

// Main container for the card
interface TestCardProps extends React.HTMLAttributes<HTMLDivElement> {
  onButtonClick?: () => void;
  withLink?:boolean
}

const TestCard = React.forwardRef<HTMLDivElement, TestCardProps>(
  ({ className, children, onButtonClick,withLink, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-1 bg-white align-middle  cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
      {/* Embedded Button */}
     { withLink && (<div className="flex justify-start -mt-2 md:mt-0">
        <Button
          variant="link"
          className="underline -ml-4 font-bold"
          onClick={onButtonClick}
        >
          Толук оку
        </Button>
      </div>)}
    </div>
  )
);
TestCard.displayName = "TestCard";

// Background section for an image
interface TestCardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc?: string; // Image source
  videoSrc?: string; 
  children?:React.ReactNode// Video source
}

const TestCardMedia = React.forwardRef<HTMLDivElement, TestCardMediaProps>(
  ({ className, imgSrc, videoSrc,children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "max-w-[356px] h-[225px] lg:h-[275px] lg:max-w-[400px] relative rounded-[6px] overflow-hidden transition-all duration-300 ease-in-out hover:border-[6px] hover:border-darkGrey",
        className
      )}
      {...props}
    >
      {imgSrc && (
        <div
          className="z-10 absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imgSrc})` }}
        />
      )}
      {videoSrc && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          loop
          muted
        />
      )}
      {children}
    </div>
  )
);
TestCardMedia.displayName = "TestCardMedia";

// Title section
const TestCardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      " hover:bg-blue-600  lg:text-l right-0 lg:right-[22px] bottom-[13px] px-3 py-1 flex justify-center items-center align-baseline  text-white font-bold bg-darkGrey rounded-[80px] absolute z-20 transition-all duration-300 ease-in-out",
      className
    )}
    {...props}
  />
));
TestCardTitle.displayName = "TestCardTitle";

// Subtitle or description title section
const TestCardSubtitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2 ref={ref} className={cn("lg:text-xl font-medium max-w-[358px]", className)} {...props} />
));
TestCardSubtitle.displayName = "TestCardSubtitle";

// Description text
const TestCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-xs lg:text-base  text-[#25264170] font-medium", className)}
    {...props}
  ></p>
));
TestCardDescription.displayName = "TestCardDescription";

export {
  TestCard,
  TestCardMedia,
  TestCardTitle,
  TestCardSubtitle,
  TestCardDescription,
};
