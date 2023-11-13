import { defineStore } from 'pinia'
import type { ChartData, ChartOptions } from '@/types/types'
interface State {
  skills: {
    frontend: {
      chartData: ChartData
    }
    backend: {
      chartData: ChartData
    }
    devops: {
      chartData: ChartData
    }
    options: ChartOptions
  }
}

export const useSkillsStore = defineStore({
  id: 'skills',
  state: (): State => ({
    skills: {
      frontend: {
        chartData: {
          labels: [
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'Vue.js',
            'Bootstrap',
            'Bulma',
            'Tailwind'
          ],
          datasets: [
            {
              data: [100, 95, 90, 80, 85, 95, 80, 90],
              fill: true,
              backgroundColor: 'rgba(85, 115, 254, 0.2)',
              borderColor: 'rgb(85, 115, 254)',
              pointBackgroundColor: 'rgb(85, 115, 254)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#000',
              pointHoverBorderColor: 'rgb(85, 115, 254)'
            }
          ]
        }
      },
      backend: {
        chartData: {
          labels: ['Java', 'PHP', 'SQL', 'MongoDB', 'Laravel', 'Spring Boot', 'Vaadin'],
          datasets: [
            {
              data: [90, 95, 80, 75, 95, 85, 70],
              fill: true,
              backgroundColor: 'rgba(85, 115, 254, 0.2)',
              borderColor: 'rgb(85, 115, 254)',
              pointBackgroundColor: 'rgb(85, 115, 254)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#000',
              pointHoverBorderColor: 'rgb(85, 115, 254)'
            }
          ]
        }
      },
      devops: {
        chartData: {
          labels: [
            'Git',
            'Gitlab',
            'Docker',
            'CI/CD',
            'Teamfähigkeit',
            'Projektleitung',
            'Kommunikation',
            'SCRUM',
            'Jira'
          ],
          datasets: [
            {
              data: [95, 80, 70, 70, 100, 80, 90, 90, 95],
              fill: true,
              backgroundColor: 'rgba(85, 115, 254, 0.2)',
              borderColor: 'rgb(85, 115, 254)',
              pointBackgroundColor: 'rgb(85, 115, 254)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#000',
              pointHoverBorderColor: 'rgb(85, 115, 254)'
            }
          ]
        }
      },
      options: {
        responsive: true,
        elements: {
          line: {
            borderWidth: 3
          }
        },
        scales: {
          r: {
            angleLines: {
              display: true
            },
            suggestedMin: 0,
            suggestedMax: 100
          }
        }
      }
    }
  })
})
