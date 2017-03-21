import Ember from "ember";

const {
  Route
} = Ember;

export default Route.extend({
  model: function() {
    return Ember.Object.create({
      name: "Polly Jean Harvey",
      avatar: "http://i.pravatar.cc/80",
      alias: "Polly Harvey",
      dob: "Born	9 October 1969 (age 47)",
      birthplace: "Bridport, Dorset, England",
      genres: "Alternative rock punk blues art rock indie rock folk rock experimental rock",
      occupation: "Musician singer-songwriter composer artist writer poet actress",
      instruments: "Vocals, guitar, bass, piano, keyboards, autoharp, saxophone, violin, cello, harmonica, drums, percussion",
      yearsActive: "1988–present",
      labels: "Too Pure Island (PolyGram) Island (UMG)",
      associatedActs: "Automatic Dlamini, Nick Cave and the Bad Seeds, Tricky, Sparklehorse, John Parish, Desert Sessions, Marianne Faithfull, Mark Lanegan, Mick Harvey, Thom Yorke",
      website: "http://pjharvey.net",
    });
  }
});
