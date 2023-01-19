import React from 'react'

export interface ResetModalProps {
  show: boolean
  title: string
  data: string
  onDismiss: () => void
}

export default function ResetModal(props: ResetModalProps) {
  return (
    <>
      {props.show && (
        <>
          <div
            className="fixed inset-0 h-full w-full overflow-y-auto bg-gray-600 bg-opacity-50"
            id="my-modal"
          />
          <div className="fixed top-20 rounded-md border bg-white p-5 shadow-lg">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl">{props.title.toUpperCase()}</h1>
              <div className="mt-4 flex w-full flex-row items-center justify-between">
                <div
                  onClick={() =>
                    navigator.clipboard.writeText(props.data + '\n')
                  }
                >
                  <svg
                    className="mr-4 h-8 w-8 text-gray-500 hover:text-gray-800 "
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />{' '}
                    <rect x="8" y="8" width="12" height="12" rx="2" />{' '}
                    <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                  </svg>
                </div>
                <button
                  className="focus:shadow-outline rounded bg-yellow-400 py-2 px-4 font-bold text-white hover:bg-yellow-300 focus:outline-none"
                  type="button"
                  onClick={
                    props.onDismiss}
                >
                  NO
                </button>
                <button
                  className="focus:shadow-outline rounded bg-yellow-400 py-2 px-4 font-bold text-white hover:bg-yellow-300 focus:outline-none"
                  type="button"
                  onClick={
                    props.resetSections(),
                    props.onDismiss}
                >
                  YES
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
