// const [countState, setcountState] = useState(0)
//   useEffect(() => {
//     let display = 
//     props.gameData != undefined ?  
//    props.gameData.screenshots : '';
//     console.log(display, "gameData Screenshots") 

//     let items = props.gameData != undefined ? setscreenshotState({
//       ...setscreenshotState, 
//       arrayURL : props.gameData.screenshots
//     })  


//     : "";

//      if(countState < screenshotState.arrayURL.length) {
//        setscreenshotState({
//          ...screenshotState,
//          arrayURL : items

//       });
//     }
//       console.log(screenshotState.arrayURL, "ArrayURL")


//       setcountState(countState +1)
//   }, [countState]) 
  
//   const nextIndex = activeIndex === screenshotState.arrayURL.length - 1 ? 0 : activeIndex + 1;
//   setActiveIndex(nextIndex);

//   // const nextIndex = activeIndex === 0 ? screenshotState.arrayURL.length - 1 : activeIndex - 1;
//   // setActiveIndex(nextIndex);



//   // const slides = screenShots.map((item) => {
//   //   return (
//   //     <CarouselItem
//   //       onExiting={() => setAnimating(true)}
//   //       onExited={() => setAnimating(false)}
//   //       key={item.src}
//   //     >
//   //       <img src={item.url} />
//   //     </CarouselItem>
//   //   );
//   // });

//   return (
//     <Container className='bg-black'>
//       <Row>
//         <Col sm="12" md={{ size: 10, offset: 1 }}>
//         <Carousel
//       activeIndex={activeIndex}
//       next={next}
//       previous={previous}
//     >
//       <CarouselIndicators items={screenshotState.arrayURL} activeIndex={activeIndex} onClickHandler={goToIndex} />
//       {slides}
//       <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
//       <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
//     </Carousel>
//         </Col>
//       </Row>
//     </Container>
//   );

// export default Screenshots;
