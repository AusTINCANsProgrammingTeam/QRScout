import React from 'react'

export default interface BaseInputProps extends InputProps {
  onChange: (value: any) => void
}
export interface Config {
  title: string
  page_title: string
  sections: SectionProps[]
}

export interface SectionProps {
  name: string
  fields: InputProps[]
}

export interface InputProps {
  title: string
  type: InputTypes
  preserveDataOnReset?: boolean
  required: boolean
  // A shorthand code for this input
  code: string
  disabled?: boolean
  value?: any
  choices?: Record<string, string>
  defaultValue?: any
  min?: number
  max?: number
  maxSize?: number
}

export type InputTypes =
  | 'text'
  | 'number'
  | 'boolean'
  | 'range'
  | 'select'
  | 'counter'
  | 'image'
