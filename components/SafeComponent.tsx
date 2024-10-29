'use client'

import React, { useState, useEffect } from 'react'

export default function SafeComponent() {
  const [currentTime, setCurrentTime] = useState<string>('')
  const [randomNumber, setRandomNumber] = useState<number | null>(null)

  useEffect(() => {
    // Safe to use browser APIs here
    setCurrentTime(new Date().toISOString())
    setRandomNumber(Math.random())
  }, [])

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-2">Safe Component</h2>
      {currentTime && (
        <p className="text-gray-700">Current time: {currentTime}</p>
      )}
      {randomNumber !== null && (
        <p className="text-gray-700">Random number: {randomNumber}</p>
      )}
    </div>
  )
}