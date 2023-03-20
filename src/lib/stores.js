import { writable } from 'svelte/store'

export const toast = writable({
    text: '',
    color: 'success'
})

export const unitsToAppend = writable([])