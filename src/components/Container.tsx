import { FunctionComponent, ReactNode } from "react"

interface ContainerProps {
    customClass: string
    children: ReactNode
}


const Container: FunctionComponent <ContainerProps> = ({ customClass, children }) => {

    return (
        <div className={`container ${[customClass]}`}>

            {children}


        </div>
    )

}

export default Container