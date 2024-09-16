import './Skill.css'
export const Skill = ({title}) => {
    return (
        <div className="p-2 my-1 flex-container flex-column bg-dark-tertiary rounded-lg">
            <p className="skill-title">{title}</p>
        </div>
    )
}