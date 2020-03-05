import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ReactComponent as Screens } from '../../assets/screens.svg';
import { ScrollScene } from 'scrollscene';
import './ScrolledView.css';

function ScrolledView() {
  const screens = useRef();
  const scrolledWrapper = useRef();

  useEffect(() => {
    const person = screens.current.querySelector('#Person');
    const center = screens.current.querySelector('#Center');
    const left = screens.current.querySelector('#Left');
    const right = screens.current.querySelector('#Right');

    gsap.set([person, center, left, right], { autoAlpha: 0 });

    const tl = gsap.timeline({ paused: true, defaults: { ease: 'power3.inOut' } });
    tl.to(person, { autoAlpha: 1 })
      .to(center, { autoAlpha: 1 })
      .to([left, right], { autoAlpha: 1 });

    new ScrollScene({
      triggerElement: scrolledWrapper.current,
      gsap: { timeline: tl },
      duration: window.innerHeight - 300,
      offset: 300,
      controller: {
        addIndicators: true,
      },
    });
  }, []);

  return (
    <div className="scrolledWrapper" ref={scrolledWrapper}>
      <Screens ref={screens} />
    </div>
  );
}

export default ScrolledView;
