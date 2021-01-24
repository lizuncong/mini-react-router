import React, { memo } from 'react';

const Index = memo((props) => {
  console.log('props...', props);
  return (
      <div>
        用户
      </div>
  )
})

export default Index;
