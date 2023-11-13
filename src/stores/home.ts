import { defineStore } from 'pinia'
import type { SubInfo } from '@/types/types'

interface State {
    subInfo: SubInfo[]
}

export const useCommonStore = defineStore({
    id: 'common',
    state: (): State => ({
        subInfo: [
            {
                title: 'current-work-text',
                text: 'current-work'
            },
            {
                title: 'languages-text',
                text: 'languages'
            }
        ]
    })
})