import React from 'react'
import ContestPreview from './contest-preview'

const ContestList = ({contests}) => {
  return (
    <div className="contest-list">
         {contests.contests.map((contest => {
        return <ContestPreview key={contest.id} contest={contest} />
      }))}
    </div>
  )
}

export default ContestList