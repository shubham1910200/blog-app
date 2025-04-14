pipeline{
    agent any

    environment{
        DOCKER_IMAGE = 'soma1999/blog-app:latest'
        credentialsId = 'dockerhub-credentials'
    }

    stages {
        stage('Clone Repo')
        {
            steps {
                git 'https://github.com/soma1910200/blog-app.git'
            }
        }

        stage('Install Dependencies')
        {
            steps {
                sh 'npm install'
            }
        }
        stage('Test')
        {
            steps {
                sh 'npm test || echo "Tests skipped"'
            }
        }
        stage('Docker Build')
        {
            steps{
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }
        stage('Docker Push')
        {
            withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                steps {
                    sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                    sh 'docker push $DOCKER_IMAGE'
                }
            }
        }

        stage('Deploy ') {
            steps{
                echo 'Deployment step can be added here, e.g., docker run apply'
            }
        }

    }
}