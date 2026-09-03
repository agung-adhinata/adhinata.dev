



interface VisibleContainerProps {
    visible: boolean
    children: React.ReactNode
}

export function VisibleContainer(props:VisibleContainerProps) {
    if(!props.visible) return <></>
    return <>{props.children}</>
}