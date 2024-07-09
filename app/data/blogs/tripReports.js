/*
------ custom tokens --------
%%b{} - for bold text
%%a{link[display]} - for links
%%n - newline

NOTE - tabbing down with `s causes \n
NOTE - new lines just make spaces by default, so making my own
*/

const zero = {
  hasNoDisclaimer: true,
  hasStravaEmbed: true,
  title: "Mt. Williamson - Long Twisting Rib (North Arete)",
  date: "July 6th, 2024, climbed June 21st 2024",
  content: `
  After being jobless while waiting for grad school to come around for the past couple months, I decided it would be nice to take a little solo trip. I had been climbing a decent bit with friends whenever they didn’t have to work, but the unemployed life presents far more time to do things than that of an employed life. After a quick pondering of places to go, I determined the High Sierra could provide everything I wanted: beautiful scenery, light crowds, not too much snow, and endless scrambling in an alpine environment. %%n
I haphazardly packed my car in a day, and bought trekking poles and approach shoes dreaming of long days scrambling with more elevation than I could handle. For some reason, I thought it would be a good idea to really test myself the first couple days, see how much I could handle this trip. I set my sights on the long twisting rib (north arete) of Mt. Williamson, the second highest peak in California at 14,380 feet, and considered much more rugged and remote than the more know Mt. Whitney. The long twisting rib goes at about 5.4 (mostly 3rd and 4th class though), climbing around 3,000 feet from the base of the climb to the summit. %%n
After driving the 15 hours from Bozeman, MT to Independence, CA on the 19th, I attempted to drive to Shepard’s Pass trailhead in my little Impreza. I heard that it could be a little hard to get to in a low clearance car. After about 10 minutes of bottoming out and getting out of my car to questioning the next section of road, I gave in decided an extra mile and a half of hiking from the lower trailhead would be better than ruining my car. %%n
%%s{11706841013} %%n
There is some more stuff here
  `,
};

const trs = { 0: zero };

export { trs };
