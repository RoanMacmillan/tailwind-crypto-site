import React, {useState} from 'react'

const Description = ({coin}) => {

  const [isCollapsed, setIsCollapsed] = useState(true);

  const fullText = coin.description.en;
  const textToShow = isCollapsed
    ? fullText.slice(0, Math.floor(fullText.length * 0.35))
    : fullText;

  return (
    <div className="mt-10">
        <h3 className="text-lg font-bold">What is {coin.name}?</h3>
        <p
          className={`mt-2 text-sm text-gray-500 ${
            isCollapsed ? "collapsed-text" : ""
          }`}
        >
          {textToShow}
        </p>

        <button
          className="mt-5 rounded-sm border px-3 pb-1 pt-1 text-sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? "Read more" : "Read less"}
        </button>
      </div>

  )
}

export default Description
