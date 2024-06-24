import {describe, it, expect, vi} from 'vitest'

import {flushPromises, shallowMount} from '@vue/test-utils'
import axios from 'axios'
import TrainingsplanListWithRestData from '@/components/TrainingsplanListWithRestData.vue'

describe('TrainingsplanView', () => {
  vi.mock('axios')
  type Trainingsplan = {id: number, name: string, zeit: string, dauer: string, schwierigkeit: number}
  const twoItemsResponse: Trainingsplan[] = [
    {id: 1, name: 'Halbmarathon', zeit: '2:00', dauer: '3', schwierigkeit: 1},
    {id: 2, name: 'Marathon', zeit: '4:00', dauer: '5', schwierigkeit: 2}
  ]

  it('should display info if list from backend is empty', async () => {
    vi.mocked(axios, true).get.mockResolvedValueOnce({data: []})
    const wrapper = shallowMount(TrainingsplanListWithRestData, {props: {title: 'test'}})
    await flushPromises()
    expect(wrapper.text()).toContain('Keine Trainingspläne vorhanden')
  })

  it('should render list from backend', async () => {
    vi.mocked(axios, true).get.mockResolvedValueOnce({data: twoItemsResponse})
    const wrapper = shallowMount(TrainingsplanListWithRestData, {props: {title: 'test'}})
    await flushPromises()
    const expectedRows = 1 + twoItemsResponse.length //Headline + one row per item
    expect(wrapper.findAll('tr').length).toBe(expectedRows)
    expect(wrapper.text()).toContain('2:00')
    expect(wrapper.text()).toContain('5')

  })
})