import { skills } from '@/lib/constants'
import React from 'react'

const SkillCard = () => {
    return (
        <div className="flex flex-row gap-6 flex-wrap ml-10">
            {skills.map((group) => (
                <div key={group.category} className="border-1 w-50">
                    <h3 className="font-bold text-medium p-3 justify-center items-center">{group.category}</h3>
                    <ul className="flex flex-wrap gap-2 border-t-1 p-2">
                        {group.technologies.map((tech) => (
                            <li
                                key={tech}
                                className="text-sm text-gray font-light"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default SkillCard
