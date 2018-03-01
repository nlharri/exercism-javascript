function SpaceAge(inputSeconds) {
  this.seconds = inputSeconds;

  var orbitDays = {
    Earth:     1          * 365.25,
    Mercury:   0.2408467  * 365.25,
    Venus:     0.61519726 * 365.25,
    Mars:      1.8808158  * 365.25,
    Jupiter:  11.862615   * 365.25,
    Saturn:   29.447498   * 365.25,
    Uranus:   84.016846   * 365.25,
    Neptune: 164.79132    * 365.25
  };

  for (let planet in orbitDays) {
    this['on' + planet] = () => {
      return parseFloat((this.seconds / 24 / 60 / 60 / orbitDays[planet]).toFixed(2));
    }
  };
};

module.exports = SpaceAge;
