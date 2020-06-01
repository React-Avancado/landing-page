import React from 'react'
import { render } from '@testing-library/react'
import Main from '.'

describe('Main', () => {
  it('Should render correctly', () => {
    const deps = { lib: '^9.1.2' }
    const { container, getByText } = render(<Main deps={deps} />)

    expect(getByText(/lib/)).toBeTruthy()
    expect(getByText(/\^9.1.2/)).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})
