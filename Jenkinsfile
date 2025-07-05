pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', credentialsId: 'github-token', url: 'https://github.com/Ferraz5/SkillSphere.git'
            }
        }

        stage('Build Backend') {
            steps {
                sh 'cd backend && ./mvnw clean package'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'cd frontend && npm install && npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose up -d --build'
            }
        }
    }
}
