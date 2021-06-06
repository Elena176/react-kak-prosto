import React from 'react';
import './App.css';
import Rating from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating';

function App() {
  console.log('App rendering');
  //полезное что-то

  //обязана вернуть JSX
  return (
    <div className='App'>
      <PageTitle title={'Hello, Elena'}/>
      <PageTitle title={'My friends'}/>
      <Rating value={3}/>
     <UncontrolledAccordion titleValue={'Menu'}/>
      <UncontrolledAccordion titleValue={'Users'} />
        <UncontrolledRating/>
     {/*<Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>*/}
        <OnOff />
        <OnOff  />
        <OnOff  />
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}
function PageTitle(props: PageTitlePropsType) {
  console.log('AppTitle rendering');
  return <h1>{ props.title }</h1>
}




export default App;
