const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Update the directory paths to move one level up since we're inside the 'scripts' folder
const ROOT_DIR = path.join(__dirname, '..');

const WORKSPACE_DIRS = [
    path.join(ROOT_DIR, 'micro-backend'),
    path.join(ROOT_DIR, 'micro-frontend')
];

const BUILD_DIR = path.join(ROOT_DIR, 'build');

// Ensure the build directory exists with correct permissions
if (!fs.existsSync(BUILD_DIR)) {
    fs.mkdirSync(BUILD_DIR, { recursive: true });
}

const getDirectories = source =>
    fs.readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

const processProjectsInWorkspace = (workspaceDir) => {
    const projects = getDirectories(workspaceDir);

    projects.forEach(project => {
        const projectPath = path.join(workspaceDir, project);
        const dockerfilePath = path.join(projectPath, 'Dockerfile');

        if (fs.existsSync(dockerfilePath)) {
            console.log(`Processing ${project} in ${workspaceDir}...`);

            try {
                console.log(`Building Docker image for ${project}...`);
                execSync(`docker build -t ${project}:latest ${projectPath}`, { stdio: 'inherit' });

                console.log(`Exporting Docker image ${project}:latest to ${BUILD_DIR}/${project}.tar`);
                execSync(`docker save -o ${path.join(BUILD_DIR, `${project}.tar`)} ${project}:latest`, { stdio: 'inherit' });
            
            } catch (error) {
                console.error(`Error processing ${project} in ${workspaceDir}:`, error);
            }
        } else {
            console.log(`No Dockerfile found for ${project} in ${workspaceDir}. Skipping...`);
        }
    });
}

WORKSPACE_DIRS.forEach(workspaceDir => {
    processProjectsInWorkspace(workspaceDir);
});

console.log("Docker image building and exporting process completed!");
