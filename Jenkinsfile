pipeline {
    agent any

    environment {
        NODEJS_HOME = "/usr/bin"
        PATH = "${NODEJS_HOME}:${env.PATH}"
         CI = "false"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', url: 'https://github.com/nikhilnambi/Budget.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npx update-browserslist-db@latest'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Run React App') {
            steps {
                sh 'npm start &'
            }
        }
    }
}
