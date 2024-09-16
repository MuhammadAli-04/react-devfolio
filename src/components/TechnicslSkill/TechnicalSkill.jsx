export const TechnicalSkill = ({title, subtitle, iconPath}) => {
    return (
        <div className='flex-container bg-dark-tertiary rounded-lg p-5 w-45 align-center'>
            <img src={iconPath} alt="icon" height={'60px'} />
            <div className="px-2 flex-container flex-column">
                <h3 >{title}</h3>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}