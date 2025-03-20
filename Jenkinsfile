pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', 
                    credentialsId: 'github-token', 
                    url: 'https://github.com/Ferraz5/SkillSphere.git'
            }
        }

        stage('Build Backend') {
            steps {
                sh 'docker build -t backend-image ./backend'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'docker build -t frontend-image ./frontend'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'docker run --rm backend-image mvn test'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh 'mvn sonar:sonar'
                }
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}
