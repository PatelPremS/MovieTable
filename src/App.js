import React from 'react';

import Expenses from './components/Expenses/Movies';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      name: 'Ironman',
      earning: "268.50M",
      date: new Date(2016, 5, 18),
    },
    { id: 'e2', name: 'Hulk', earning: "192.36M", date: new Date(2019, 2, 6) },
    {
      id: 'e3',
      name: 'Captain America',
      earning: "294.67M",
      date: new Date(2020, 6, 23),
    },
    {
      id: 'e4',
      name: 'Thor',
      earning: "213.14M",
      date: new Date(2021, 3, 31),
    },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2 style={{textAlign: "center",color:"red"}}>Movie Details</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;