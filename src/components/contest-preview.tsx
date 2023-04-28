import * as React from 'react'

const ContestPreview: React.FC<{contest: object}> = ({contest}) => {
  return (
    <div className="contest-preview" key={contest.id}>
    <div className="category">{contest.categoryName}</div>
    <div className="contest">{contest.contestName}</div>
  </div>
  )
}

export default ContestPreview