type Props = {
    children: React.ReactNode
    className?: string
}

import { cn } from "@/lib/utils"

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn("max-w-7xl mx-auto px-3 sm:px-4 lg:px-10", className)}>
      {children}
    </div>
  );
}

export default Container

      
