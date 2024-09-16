import './Heading.css'

export const Heading = ({title}) => {
    return (
        <h1 className='heading'>{title}</h1>
    )
}

export const Subheading = ({title}) => {
    return (
        <h2 className='subheading'>{title}</h2>
    )
}