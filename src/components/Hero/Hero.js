import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ReactComponent as HeroImage } from '../../assets/mobile_development.svg';
import './Hero.css';

function Hero() {
  const image = useRef();
  const heroText = useRef();

  useEffect(() => {
    const person = image.current.querySelector('#Person');
    const laptop = person.querySelector('#Laptop');
    const phone = image.current.querySelector('#Phone');
    const screen = phone.querySelector('#Screen');
    const screenBackground = screen.querySelector('#ScreenBackground');
    const screenContent = screen.querySelector('#ScreenContent');
    const floor = image.current.querySelector('#Floor');

    gsap.set([person, laptop, phone, floor, screenContent, heroText.current], { autoAlpha: 0 });
    gsap.set([screenBackground], { fill: 'black' });
    gsap.set(screen, { y: '-=5' });
    gsap.set(document.body, { overflow: 'hidden' });

    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
    tl.fromTo(person, { x: '-=100' }, { x: '+=100', autoAlpha: 0.3, duration: 3 })
      .to(
        laptop,
        {
          autoAlpha: 1,
        },
        '-=1',
      )
      .fromTo(phone, { y: '-=100%' }, { y: '+=100%', autoAlpha: 0.3, duration: 3 })
      .to(screenBackground, { fill: 'white' })
      .to([screenContent, person, phone], { autoAlpha: 1 }, '<')
      .to(heroText.current, { autoAlpha: 1, duration: 2 })
      .set(document.body, { overflow: 'auto' });
  }, []);

  return (
    <div className="hero">
      <div className="heroText" ref={heroText}>
        <h1>adam siekierski</h1>
        <h4>creative fullstack developer.</h4>
      </div>
      <HeroImage ref={image} />
    </div>
  );
}

export default Hero;
