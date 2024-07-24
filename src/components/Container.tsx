import React from 'react'
interface ContainerProps extends React.HTMLAttributes<HTMLElement>{
    children:React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({children,  className}: ContainerProps) => {
  return (
    <div className={`mx-auto max-w-screen-xl px-4 ${className}`}>
      {children}
    </div>
  )
}

export default Container
