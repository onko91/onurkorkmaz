export interface Common {
  title: string
  description: string
  subInfo: SubInfo[]
}
export interface SubInfo {
  title: string
  text: string
}

export interface TimelineEntries {
  work: TimelineEntry[]
  education: TimelineEntry[]
  further: TimelineEntry[]
}
export interface TimelineTag {
  title: string
}

export interface TimelineEntry {
  active?: boolean
  icon?: string
  range: string
  title: string
  location: string
}

export interface ChartData {
  labels: string[]
  datasets: [
    {
      data: number[]
      fill: boolean
      backgroundColor: string
      borderColor: string
      pointBackgroundColor: string
      pointBorderColor: string
      pointHoverBackgroundColor: string
      pointHoverBorderColor: string
    }
  ]
}

export interface ChartOptions {
  responsive: boolean
  elements: {
    line: {
      borderWidth: number
    }
  }
  scales: {
    r: {
      angleLines: {
        display: boolean
      }
      suggestedMin: number
      suggestedMax: number
    }
  }
}

export interface Article {
  title: string
  text: string
}
