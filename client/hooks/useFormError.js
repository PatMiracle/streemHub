'use client'

import { useState, useEffect } from 'react'

const useFormError = () => {
  const [formError, setFormError] = useState(false)

  // scroll to top when formError is true
  useEffect(() => {
    if (formError) {
      window.scrollTo(0, 0)
    }
  }, [formError])

  return { formError, setFormError }
}

export default useFormError
