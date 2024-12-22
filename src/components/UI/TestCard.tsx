import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/UI/button";

// Main container for the card
interface TestCardProps extends React.HTMLAttributes<HTMLDivElement> {
  onButtonClick?: () => void;
}

const TestCard = React.forwardRef<HTMLDivElement, TestCardProps>(
  ({ className, children, onButtonClick, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-1  bg-white max-w-[356px] md:max-w-[420px] align-middle cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
      {/* Embedded Button */}
      <div className="flex justify-start -mt-2 md:mt-0">
        <Button
          variant="link"
          className="underline -ml-4 font-bold"
          onClick={onButtonClick}
        >
          Толук оку
        </Button>
      </div>
    </div>
  )
);
TestCard.displayName = "TestCard";

// Background section for an image
interface TestCardImageProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc?: string;
}
const TestCardImage = React.forwardRef<HTMLDivElement, TestCardImageProps>(
  ({ className, imgSrc, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        ` bg-cover bg-center max-w-[356px] h-[225px] lg:h-[275px] lg:max-w-[400px] relative rounded-[6px] transition-all duration-300 ease-in-out hover:border-[6px] hover:border-darkGrey`,
        className
      )}
      style={{ backgroundImage: `url(${imgSrc})` }}
      {...props}
    />
  )
);
TestCardImage.displayName = "TestCardImage";

// Title section
const TestCardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      " hover:bg-blue-600  lg:text-xl right-0 lg:right-[22px] bottom-[13px] flex justify-center px-3 py-1 text-white font-bold bg-darkGrey rounded-[80px] absolute transition-all duration-300 ease-in-out",
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
  <h2 ref={ref} className={cn("lg:text-xl font-medium", className)} {...props} />
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
  TestCardImage,
  TestCardTitle,
  TestCardSubtitle,
  TestCardDescription,
};
