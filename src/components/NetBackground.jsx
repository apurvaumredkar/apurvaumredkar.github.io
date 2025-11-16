import { useEffect, useState } from 'react'
import netSvg from '../assets/net.svg'

const NetBackground = () => {
  const [patches, setPatches] = useState([])

  useEffect(() => {
    // Place a patch in every grid cell with random rotation
    const generatePatches = () => {
      const gridCols = 6 // Number of columns in grid
      const gridRows = 3 // Number of rows in grid
      const newPatches = []

      // Add padding (5% on each side, so usable area is 90%)
      const padding = 5
      const usableWidth = 100 - (padding * 2)
      const usableHeight = 100 - (padding * 2)

      const cellWidth = usableWidth / gridCols
      const cellHeight = usableHeight / gridRows

      let id = 0
      for (let row = 0; row < gridRows; row++) {
        for (let col = 0; col < gridCols; col++) {
          newPatches.push({
            id: id++,
            top: padding + (row * cellHeight + cellHeight / 2),
            left: padding + (col * cellWidth + cellWidth / 2),
            rotation: Math.random() * 360,
            scale: 0.6, // Fixed size for all patches
            opacity: 0.06,
          })
        }
      }

      setPatches(newPatches)
    }

    generatePatches()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {patches.map((patch) => (
        <img
          key={patch.id}
          src={netSvg}
          alt=""
          className="absolute"
          style={{
            top: `${patch.top}%`,
            left: `${patch.left}%`,
            transform: `translate(-50%, -50%) rotate(${patch.rotation}deg) scale(${patch.scale})`,
            opacity: patch.opacity,
            width: '300px',
            height: '300px',
          }}
        />
      ))}
    </div>
  )
}

export default NetBackground
