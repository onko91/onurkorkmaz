import { defineStore } from 'pinia'
import type { TimelineEntries } from '@/types/types'

interface State {
  entries: TimelineEntries
}

export const useCvStore = defineStore({
  id: 'cv',
  state: (): State => ({
    entries: {
      work: [
        {
          active: true,
          range: 'Seit 12/2022',
          title: 'Software Solution Architect',
          location: 'Cognizant Mobility GmbH'
        },
        {
          active: false,
          icon: 'fa-code',
          range: '12/2020 - 11/2022',
          title: 'Software Developer',
          location: 'loadbee GmbH'
        },
        {
          active: false,
          icon: 'fa-people-roof',
          range: '03/2018 - 11/2020',
          title: 'Head of Development',
          location: 'Concore GmbH'
        },
        {
          active: false,
          icon: 'fa-arrow-up',
          range: '12/2016 - 02/2018',
          title: 'PHP-Softwareentwickler',
          location: 'Concore GmbH'
        }
      ],
      education: [
        {
          active: false,
          icon: 'fa-child-reaching',
          range: '08/2014 - 02/2015',
          title: 'Werkstudent: Web Entwickler',
          location: 'frontandbackend GmbH'
        },
        {
          active: false,
          icon: 'fa-graduation-cap',
          range: '03/2012 - 08/2016',
          title: 'B.Sc. Medien- & Kommunikationsinformatik',
          location: 'Hochschule Reutlingen'
        },
        {
          active: false,
          icon: 'fa-university',
          range: '03/2009 - 07/2011',
          title: 'Softwaretechnik mit Medieninformatik',
          location: 'Hochschule Esslingen'
        },
        {
          active: false,
          icon: 'fa-school',
          range: '07/2009',
          title: 'Fachhochschulreife',
          location: 'it.schule Stuttgart'
        }
      ],
      further: [
        {
          active: false,
          icon: 'fa-certificate',
          range: '05/2019',
          title: 'IHK-Ausbildereignungsprüfung nach AEVO',
          location: 'IHK Region Stuttgart'
        }
      ]
    }
  })
})
