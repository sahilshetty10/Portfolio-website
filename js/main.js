gsap.registerPlugin(ScrollTrigger);
var tl1 = gsap.timeline();
tl1.fromTo("#home", { opacity: 0 }, { opacity: 1 });
tl1.fromTo("header", { opacity: 0 }, { opacity: 1 });
tl1.fromTo(".hero-image", { scale: 0 }, { scale: 1 });
gsap.fromTo(
  "#services",
  { opacity: 0 },
  {
    scrollTrigger: "#services",
    opacity: 1,
    duration: 0.5,
  }
);
var tl2 = gsap.timeline({ scrollTrigger: "#services" });
tl2.fromTo("#service-3", { x: -100, opacity: 0 }, { x: 0, opacity: 1 });
tl2.fromTo("#service-2", { x: -100, opacity: 0 }, { x: 0, opacity: 1 });
tl2.fromTo("#service-1", { x: -100, opacity: 0 }, { x: 0, opacity: 1 });
gsap.fromTo(
  "#projects",
  { opacity: 0 },
  {
    scrollTrigger: "#projects",
    opacity: 1,
    duration: 0.5,
  }
);
var tl3 = gsap.timeline({ scrollTrigger: "#projects" });
tl3.fromTo("#project-1", { y: -300, opacity: 0 }, { y: 0, opacity: 1 });
tl3.fromTo("#project-2", { y: -300, opacity: 0 }, { y: 0, opacity: 1 });
gsap.fromTo(
  "#blog",
  { opacity: 0 },
  {
    scrollTrigger: "#blog",
    opacity: 1,
    duration: 0.5,
  }
);
var tl4 = gsap.timeline({ scrollTrigger: "#blog" });
tl4.fromTo("#article-3", { x: -100, opacity: 0 }, { x: 0, opacity: 1 });
tl4.fromTo("#article-2", { x: -100, opacity: 0 }, { x: 0, opacity: 1 });
tl4.fromTo("#article-1", { x: -100, opacity: 0 }, { x: 0, opacity: 1 });
gsap.fromTo(
  "#testimonials",
  { opacity: 0 },
  {
    scrollTrigger: "#testimonials",
    opacity: 1,
    duration: 0.5,
  }
);
var tl5 = gsap.timeline({ scrollTrigger: "#testimonials" });
tl5.fromTo("#testimonial-1", { y: -300, opacity: 0 }, { y: 0, opacity: 1 });
tl5.fromTo("#testimonial-2", { y: -300, opacity: 0 }, { y: 0, opacity: 1 });
tl5.fromTo("#testimonial-3", { y: -300, opacity: 0 }, { y: 0, opacity: 1 });
tl5.fromTo("#testimonial-4", { y: -300, opacity: 0 }, { y: 0, opacity: 1 });
