import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../../../src/components/ProjectSelectionPage/ProjectSelectionPage.module.css';

const ProjectSelectionPage: React.FC = () => {
    const [projectName, setProjectName] = useState('');
    const navigate = useNavigate();

    const handleProjectSelection = () => {
        if (projectName) {
            navigate(`/tasks/${projectName}`)
        }
    };

    return (
        <>
            <h1 className={styles.title}>Выбор проекта</h1>
            <input
                className={styles.subtitle}
                type="text"
                placeholder="Введите название проекта"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
            />
            <button onClick={handleProjectSelection}>Выбрать проект</button>
        </>
    )
}

export default ProjectSelectionPage;