import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating';

function App() {

    let[ratingValue, setRatingValue] = useState<RatingValueType>(0)
  return (
    <div className='App'>
      {/*<PageTitle title={'Hello, Elena'}/>
      <PageTitle title={'My friends'}/>*/}
      <Rating value={ratingValue} onClickChange={setRatingValue}/>
    {/* <UncontrolledAccordion titleValue={'Menu'}/>
      <UncontrolledAccordion titleValue={'Users'} />
        <UncontrolledRating/>*/}
     {/*<Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>*/}
        {/*<OnOff />
        <OnOff  />
        <OnOff  />*/}
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
