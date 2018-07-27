pipeline {
    agent none
    stages {
        stage('Build') {
            agent {
                docker { image 'node:8-alpine' }
            }
            steps {
                ansiColor('xterm') {
                    sh 'rm -rf node_modules/'
                    sh 'npm install'
                    sh 'npm build'
                }
            }
        }
       stage('Build & Push image') {
            agent any
            steps {
                script {
                    def image = docker.build("tell-me-a-secret/frontend:${env.GIT_COMMIT}")
                    docker.withRegistry('https://registry.wanari.net', 'jenkins-registry') {
                        image.push()
                        image.push("latest")
                    }
                }
            }
        }
    }
}
