pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'soma1999/blog-app:latest'
        VERCEL_DEPLOY_HOOK = 'https://api.vercel.com/v1/integrations/deploy/prj_HmeZlupQ0rRJbSOzpzSGDNC9wbuc/DmqdAL8LjM'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/shubham1910200/blog-app'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Docker Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh 'docker push $DOCKER_IMAGE'
                }
            }
        }

        stage('Trigger Vercel Deploy') {
            steps {
                sh 'curl -X POST $VERCEL_DEPLOY_HOOK'
            }
        }
    }
}
