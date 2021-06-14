import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {Accordion} from './components/Accordion/Accordion';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';

function App() {

    let[ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsedAccordion,  setCollapsedAccordion] = useState<boolean>(false)
    let [turn, setTurn] = useState(false);

  return (
    <div className='App'>
        <Accordion titleValue={'Menu'} collapsed={collapsedAccordion} onChange={() => {setCollapsedAccordion(!collapsedAccordion)}} />
        <Rating value={ratingValue} onClickChange={setRatingValue}/>
        <UncontrolledRating onChange={setRatingValue}/>
        <OnOff turn={turn} setTurn={setTurn}/>
        <UncontrolledOnOff defaultOn={collapsedAccordion} onChange={setTurn}/> {turn.toString()}
      <UncontrolledAccordion titleValue={'Users'} />
        {/*<Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>*/}
        {/*<OnOff  />*/}
        {/*<PageTitle title={'Hello, Elena'}/>
      <PageTitle title={'My friends'}/>*/}
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
