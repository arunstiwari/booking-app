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
             npm run test:ci
           '''

            }
         }
      }
     stage('Code Coverage'){
              steps{
                echo 'Going to execute Code Coverage'
                script{

                      sh "npm run coverage:prod"
                }
              }
           }
     stage('Sonar Coverage Analysis'){
           steps{
             echo 'Going to execute Sonar Coverage Analysis'
             script{
              def scannerHome = tool 'sonarqube-scanner';
              sh "${scannerHome}/sonar-scanner -Dsonar.projectKey=BOOKING_APP -Dsonar.projectName=BookingApp  -Dsonar.language=js   -Dsonar.sources=./src  -Dsonar.host.url=https://sonarcloud.io -Dsonar.login=cbb9c439aef22bfbffc0541e7831a43bb8882e31"
             }
           }
        }
   }
}