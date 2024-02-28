import React, { useState } from 'react'
import BaseInputProps from './BaseInputProps'

export interface NumberInputProps extends BaseInputProps {
  min?: number
  max?: number
  defaultValue?: string
}

export default function NumberInput(data: NumberInputProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    data.onChange(e.target.value)
    e.preventDefault()
  }

  return (
    <input
      className="rounded py-2 px-1 text-gray-700"
      type="number"
      min={data.min}
      max={data.max}
      defaultValue={data.defaultValue}
      id={data.title}
      onChange={handleChange}
    />
  )
}
