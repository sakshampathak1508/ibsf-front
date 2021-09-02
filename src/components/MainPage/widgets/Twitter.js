import React from 'react';
import { TwitterTimelineEmbed} from 'react-twitter-embed'
const Twitter = props => {
    return (
        <div className="centerContent">
<div className="selfCenter standardWidth">
<TwitterTimelineEmbed
  sourceType="profile"
  screenName="ibsf"
  options={{height: "36rem"}}
//   onComplete={action}
/>
</div>
</div>
    );
};


export default Twitter;