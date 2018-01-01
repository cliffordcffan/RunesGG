# RunesGG #

RunesGG is our entry to Riot Games' API Challenge 2017 by BobFromSweden and Zoe ZoeStar for the Usability/Practicality category.

# Overview #

Our goal was to create a tool that comprehensively displayed Runes Reforged data. We felt that there weren't any existing ways to see rune data beyond the most popular and highest win-rate trees. Consequently, it's not easy for a player to understand or visualize the differences between swapping x rune with y rune and so forth. 

So we created a website for players to look up any given champion, and for that champion, display all rune trees and rune setups that other players have played ranked solo-queue matches with. And for each individual rune stone, we would show how well the community has with it: how often they win with it, how often they pick it, and what stats that rune gave on average.

# Design #

We wanted to display our information in a visually intuitive manner, so we opted to display all 5 rune trees all at once. To help users visualize differences between rune trees, we display data about each tree as a whole: how often this tree is picked and how often it wins in those games. To visualize data between individual runes, we didn't want to overcrowd the space with data, so we wanted to make the more important information readily available, and the more specific data displayable with a hover-over. 

To that end, we elected to modify each individual rune icon's opacity by how often it was selected. We also had some discussions about how to best display the win rate of that specific rune, but we never reached an agrement on an acceptable design and ended up displaying that information, along with other stats, inside of a hover-over box. (See notes on Implementation Process and Features We Didn't Get Around to Finishing)

# Implementation Process #

Neither of our team members had much experience with web development, so we spent about a week or so learning basics and understanding the general task ahead of us. We ended up learning how to write a web app on the MEAN stack and decided to build our website with that. 

We started out just trying to figure out how to parse Riot's API data into, well, anything. It took us a while to play around with Mongoose, but we eventually were able to parse the static Champion data. From there we split up the work to have Zoe ZoeStar handle making the website look pretty and let BobFromSweden handle the backend data parsing. 

On the backend, we discussed a few schemas for our master database and settled on creating a collection of champions that each have their own array of primary and secondary rune sets. Each object in those arrays would be defined by a rune-tree schema, which would include that tree's name, id, total games played, as well as an array of perk objects. Those perk objects represent each individual keystone and rune, and include information about that rune's id, total wins, total losses, and statistics. 

Once we had all our schemas and mongoose models set up, we began thinking about how to crawl through the total set of ranked games. After some mishaps and the mistake of being careless with the API key rate limits, we learned to stagger our function calls with timeouts and settled on pulling a couple thousand games (versus the original goal of all Gold/Platinum+ ranked games).

We began by pulling the challenger ladder for ranked solo queue, and from there, we pulled each player's 100 recent ranked solo queue games from the Match-V3 API, discarding games that happened before the Preseason Patch. From there, it was just a matter of getting the appropriate champion and rune data into our database and debugging.

# Features We Didn't Get Around to Finishing #

1. We never quite figured out what each of the "perkStat" values in the Match-V3 API referred to for individual stats. We know that that information is displayed inside the game client: for example Press The Attack's stats refer to Total Damage, Bonus Damage, and Expose Damage on the client. But we didn't find a way to access that through the API and didn't have enough time to manually find and set each of those.

2. The search bar. The search bar was supposed to have a drop down table to list all valid champions, and to reject invalid selections. We also discussed having a chart of champion icons for users to select from (a la op.gg). 

Unfortunately, it fell down on our list of priorities as we wanted to prioritize on getting a full working demo, and we ran out of time. We know this was a super important part of the app, please forgive us.

3. Dynamic opacity. We played around with a node.js package called stylus (https://www.npmjs.com/package/stylus) in order to scale the opacity of our icons to the most popular rune chosen for a given row or tree 

(We would use rows in the primary rune trees because individual runes are competing with runes of the same row; for the same reason, we would compare secondary tree runes with all other runes of that tree because users can only pick 2 runes)

We got this feature working with static test values, but were unable to integrate it into our web app. In the end, the clock was ticking, so we decided to scrap it for future development.

 


