import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['third', '-wrap'],

  goldSponsors:  Ember.A([
    {
      name: "Ultra Fragola",
      img: "/assets/uf.svg",
      link: "http://www.ultra-fragola.com/",
      description: [
        "Line 1",
        "Line 2"
      ],
    },
    {
      name: "GoDaddy",
      img: "/assets/godaddy.svg",
      link: "https://www.godaddy.com/",
      description: [
        "Line 1",
        "Line 2"
      ],
    },
    {
      name: "Mozilla",
      img: "/assets/mozilla.svg",
      link: "https://www.mozilla.org/en-US/",
      description: [
        "Line 1",
        "Line 2"
      ],
    },
    {
      name: "Modeset",
      img: "/assets/modeset.svg",
      link: "http://modeset.com/",
      description: [
        "Line 1",
        "Line 2"
      ],
    },
    {
      name: "Turing",
      img: "/assets/turingLogo.svg",
      link: "https://www.turing.io/",
      description: [
        "Line 1",
        "Line 2"
      ],
    },
    {
      name: "Google",
      img: "/assets/google.svg",
      link: "http://google.com/",
      description: [
        "Line 1",
        "Line 2"
      ],
    },
    {
      name: "Modeset",
      img: "/assets/digital-ocean.svg",
      link: "https://www.digitalocean.com/",
      description: [
        "Line 1",
        "Line 2"
      ],
    },
    {
      name: "CA Technologies",
      img: "/assets/CA_logo.svg",
      link: "http://www.ca.com/us.html",
      description: [
        "Mode Set is a boutique product consultancy out of Denver, Colorado leveraging Ember and Rails. Though nerds at heart, we do more than write code. We are entrepreneurs. We are artists. We invest deeply in our clients, taking full ownership to build smart and successful products.",
      ],
    },
  ]),

  // team: Ember.A([
  //   {
  //     name: "Steve Kinney"
  //   }
  // ]),

  silverSponsors:  Ember.A([
    {
      name: "Silver sponsor 1",
      img: "http://richestcelebrities.org/wp-content/uploads/2014/09/Bruce-Willis-Net-Worth.jpg",
      description: [
        "Description for silver 1",
        "Line 2 of description"
      ],
    },
    {
      name: "Mode Set",
      img: "http://richestcelebrities.org/wp-content/uploads/2014/09/Bruce-Willis-Net-Worth.jpg",
      description: [
        "Mode Set is a boutique product consultancy out of Denver, Colorado leveraging Ember and Rails. Though nerds at heart, we do more than write code. We are entrepreneurs. We are artists. We invest deeply in our clients, taking full ownership to build smart and successful products.",
      ],
    },
  ])


});
