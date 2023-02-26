import React ,{ constructor, useState }  from 'react';

interface IState {
  count: number
}

//export class ClickStatistic extends React.Component<{}, IState> {
export const ClickStatistic: React.FC = () => {  
  
  constructor {
  count:  0;
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined () {
    this.setState(({ count }) => {
      return {
        count: ++count,
      };
    });
  }


    return (
      <button onClick={handleClick}>Click my!</button>
    );

}

//export default ClickStatistic;