type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "narrow" | "default" | "wide" | "full";
};

const sizeMap = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-[1440px]",
  full: "max-w-none",
};

export default function Container({ children, className = "", size = "default" }: ContainerProps) {
  return <div className={`mx-auto w-full px-5 md:px-8 ${sizeMap[size]} ${className}`}>{children}</div>;
}
