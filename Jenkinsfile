pipeline {
    agent any
    tools{nodejs "node"}
   stages{
     stage('Build'){
        steps{
          echo 'Going to install the npm dependencies'
          script{
            sh "npm install"
          }
        }
     }
     stage('Unit Test'){
         steps{
           echo 'Going to execute Unit Test '
           script{
           sh "pwd"
           sh '''
             cd booking-app
             npm run test:ci
           '''

            }
         }
      }
     stage('Code Coverage'){
              steps{
                echo 'Going to execute Code Coverage'
                script{
                      sh"cd booking-app"
                      sh "npm coverage:prod"
                }
              }
           }
     stage('Sonar Coverage Analysis'){
           steps{
             echo 'Going to execute Sonar Coverage Analysis'
           }
        }
   }
}