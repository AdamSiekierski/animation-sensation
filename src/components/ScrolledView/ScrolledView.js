import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ReactComponent as Screens } from '../../assets/screens.svg';
import { ScrollScene } from 'scrollscene';
import './ScrolledView.css';

function ScrolledView() {
  const screens = useRef();
  const scrolledWrapper = useRef();
  const imageWrapper = useRef();

  useEffect(() => {
    const person = screens.current.querySelector('#Person');
    const center = screens.current.querySelector('#Center');
    const left = screens.current.querySelector('#Left');
    const right = screens.current.querySelector('#Right');

    gsap.set([person, center, left, right], { autoAlpha: 0 });

    const tl = gsap.timeline({ paused: true, defaults: { ease: 'power3.inOut', duration: 1 } });
    tl.to(person, { autoAlpha: 1 })
      .to(center, { autoAlpha: 1 })
      .to([left, right], { autoAlpha: 1 });

    const scrollScene = new ScrollScene({
      triggerElement: imageWrapper.current,
      gsap: { timeline: tl },
      triggerHook: 0,
      duration: window.innerHeight / 2,
      controller: {
        addIndicators: true,
      },
    });

    scrollScene.Scene.setPin(imageWrapper.current);
  }, []);

  return (
    <div className="scrolledWrapper" ref={scrolledWrapper}>
      <div className="imageWrapper" ref={imageWrapper}>
        <Screens ref={screens} />
      </div>
    </div>
  );
}

export default ScrolledView;
