<?php

namespace Database\Seeders;

use Faker\Provider\DateTime;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FeatureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        DB::table('features')->insert([
            [
                'title' => 'Ninja Massage Therapist',
                'slug' => 'ninja-massage',
                'launch' => DateTime::dateTime(),
                'status' => 'active',
                'thumbLocation' => 'thumbnails/ninja-massage-thumb.png',
                'section_id' => 2,
                'medium' => 'video',
                'mediaLocation' => 'videos/ninja-massage.mp4',
                'html' => null,
                'isPopular' => false,
            ],
            [
                'title' => 'Rust Monster',
                'slug' => 'rust-monster',
                'launch' => DateTime::dateTime(),
                'status' => 'active',
                'section_id' => 1,
                'medium' => 'image',
                'mediaLocation' => 'images/rust-monster.png',
                'thumbLocation' => 'thumbnails/rust-monster-thumb.png',
                'html' => null,
                'isPopular' => false,
            ],
            [
                'title' => 'Kitchen Floor',
                'slug' => 'kitchen-floor',
                'launch' => DateTime::dateTime(),
                'status' => 'active',
                'section_id' => 2,
                'medium' => 'video',
                'mediaLocation' => 'videos/kitchen-floor.mp4',
                'thumbLocation' => 'thumbnails/kitchen-floor-thumb.png',
                'html' => null,
                'isPopular' => false,
            ],
            [
                'title' => 'First Gen Pokémon',
                'slug' => 'first-gen-pokemon',
                'launch' => DateTime::dateTime(),
                'status' => 'active',
                'section_id' => 3,
                'medium' => 'html',
                'mediaLocation' => 'first-gen-pokemon.png',
                'thumbLocation' => 'thumbnails/first-gen-pokemon-thumb.png',
                'html' => '<div><h2>The Ratings | First-Generation Pokémon</h2><h3>Tangela</h3><div>If Pokémon were US Presidents, Tangela would be Rutherford B. Hayes. If Pokémon were members of The Traveling Wilburys, Tangela would be Jeff Lynne. If Pokémon were Leonardo Da Vinci paintings, Tangela would be the Sala Delle Asse. It’s obscure, is what I’m saying. It didn’t even get an evolution until Generation IV, and it still doesn’t have a third form. However, I’m a sucker for an underdog, even if it’s an underdog that looks like an intestinal parasite. B+</div> <h3>Zubat</h3> <div>I am unable to separate Zubat from memories of trying to get to Lavender Town and having to fight off innumerable hordes of these little eyeless fuckers. All first-generation Pokémon had irritating cries (and that includes Pikachu’s cry in Pokémon Yellow) but Zubat’s cry seemed like it was created by an unethical CIA experiment intended to make enemy combatants throw their Game Boys against the wall. D</div <h3>Hitmonchan</h3> <div>I’m deeply disappointed Niantic didn’t continue with the Hitmonchan/Hitmonlee naming scheme. That could have given us Hitmonsegal, Hitmonyeoh, and Hitmonvandamme. Instead, they added Hitmantop, who I assume was named after legendary cinematic martial artist Carrot Top. Of the original Brothers Hitmon, I have to go with Hitmonchan because it looks somewhat less like an angry turkey leg. C+</div> <h3>Snorlax</h3> <div>Snorlax is everything I aspire to be: a giant sleepy obstacle that only wakes up if you play a very specific instrument. I also have access to at least two of its moves, Rest and Body Slam. Given that I have ADHD, I think you could also throw Amnesia in there. In fact, the two main things that distinguish me from a Snorlax are that I am a side sleeper, and my name doesn’t sound like a medication you take the night before a colonoscopy. A</div> <h3>Porygon</h3> <div>I am, to this day, not entirely sure what a Pokémon is. Most of them seem to be the equivalent of animals, what with flocks of Pidgeys, and Magikarp practically throwing themselves at your fishhook. Some are plants, and some, like Geodude, aren’t like real organisms but you could see how they might fit into an ecosystem. Then there are those that, like Porygon, are manufactured. If I brought a Furby to the Pokémon world, would that Furby be considered a Pokémon, or would I have to give it some Pokémon-specific abilities, such as sending children into epileptic fits and nearly killing an entire anime series? C-</div> <div>',
                'isPopular' => false,
            ], [
                'title' => 'You\'ve Been Hit',
                'slug' => 'youve-been-hit',
                'launch' => DateTime::dateTime(),
                'status' => 'active',
                'section_id' => 4,
                'medium' => 'image',
                'mediaLocation' => 'images/youve-been-hit.png',
                'thumbLocation' => 'thumbnails/youve-been-hit-thumb.png',
                'html' => null,
                'isPopular' => false,
            ], [
                'title' => 'Homunculi',
                'slug' => 'homunculi',
                'launch' => DateTime::dateTime(),
                'status' => 'active',
                'section_id' => 2,
                'medium' => 'video',
                'mediaLocation' => 'videos/homunculi.mp4',
                'thumbLocation' => 'thumbnails/homunculi-thumb.png',
                'html' => null,
                'isPopular' => false,
            ], [
                'title' => 'MacGruff',
                'slug' => 'macgruff',
                'launch' => DateTime::dateTime(),
                'status' => 'active',
                'section_id' => 4,
                'medium' => 'image',
                'mediaLocation' => 'images/macgruff.png',
                'thumbLocation' => 'thumbnails/macgruff-thumb.png',
                'html' => null,
                'isPopular' => false,
            ], [
                'title' => 'Nine Inch Noéls',
                'slug' => 'nine-inch-noels',
                'launch' => DateTime::dateTime(),
                'status' => 'active',
                'section_id' => 5,
                'medium' => 'video',
                'mediaLocation' => 'videos/nine-inch-noels.mp4',
                'thumbLocation' => 'thumbnails/nine-inch-noels-thumb.png',
                'html' => null,
                'isPopular' => true,
            ], [
                'title' => 'A Song',
                'slug' => 'a-song',
                'launch' => DateTime::dateTime(),
                'status' => 'active',
                'section_id' => 4,
                'medium' => 'image',
                'mediaLocation' => 'images/a-song.png',
                'thumbLocation' => 'thumbnails/a-song-thumb.png',
                'html' => null,
                'isPopular' => true,
            ], [
                'title' => 'Rudolph: The Lost Scene',
                'slug' => 'rudolph-lost',
                'launch' => DateTime::dateTime(),
                'status' => 'active',
                'section_id' => 2,
                'medium' => 'video',
                'mediaLocation' => 'videos/rudolph-lost.mp4',
                'thumbLocation' => 'thumbnails/rudolph-lost-thumb.png',
                'html' => null,
                'isPopular' => true,
            ], [
                'title' => 'Mower Than Meets the Eye',
                'slug' => 'mower-than-meets',
                'launch' => DateTime::dateTime(),
                'status' => 'active',
                'section_id' => 2,
                'medium' => 'video',
                'mediaLocation' => 'videos/mower-than-meets.mp4',
                'thumbLocation' => 'thumbnails/mower-than-meets-thumb.png',
                'html' => null,
                'isPopular' => true,
            ], [
                'title' => 'Monopoly Tokens',
                'slug' => 'monopoly-tokens',
                'launch' => DateTime::dateTime(),
                'status' => 'active',
                'section_id' => 3,
                'medium' => 'html',
                'mediaLocation' => null,
                'thumbLocation' => 'thumbnails/monopoly-tokens-thumb.png',
                'html' => '<div> <h2>The Ratings: Monopoly Tokens</h2>  <h3>The Doggie</h3> <div>Ah, yes. The Gleaming Terrier of Finance. As a kid, the selling point of the dog was that you could tilt him and pretend to make him piddle on your opponents’ hotels. Not exactly evolved comedy, but once you’ve chuckled over the “Beauty Contest” card, you have to take your laughs where you can get them in Monopoly. C</div> <h3>The Shoe</h3> <div>Okay, fine, shoe equals walk equals travel around the board. But what I want to know is, what the hell is that on the back of the shoe[1]? I mean, in practical terms it’s a handle, but the car doesn’t have a random protrusion coming out of the back, so why does the shoe? Is it a shoehorn? Was there a penchant for wearing strap-enhanced footwear during the Great Depression? Weird. Eerie. C-</div> <h3>The Car</h3> <div>Now this is the piece to have. The movement metaphor is there, as is the reference to riches. The sound effects were de rigueur, of course, with the car screeching through the visiting area of the jail like a Duke boy. Nice set of wheels, too. I wonder if there’s someplace you can buy a replica Monopoly car. That’d turn heads at the classic auto show. A</div> <h3>The Hat</h3> <div>“Hey, I’m a hat. Here I am. A hat. Felt, you know. Bask in my haberdashery.” I’m sorry, maybe I wasn’t paying attention in freshman drama class, but I just can’t get into the role of a hat that invests in real estate. It sounds like a bad remake of an old live-action Disney movie. D</div> <h3>The Guy on a Horse</h3> <div>What game is this token really from? What is it doing in Monopoly? It’s fun and all, if a tad unstable and prone to getting stepped on and bent, but how does “ride ‘em, cowboy” fit in with “fork over the rent, you peon”? Maybe it’s a reference to polo or something, but it sure looks like the Hopalong Cassidy school of equestrianism to me. B</div> <h3>The One Everyone Forgets</h3> <div>What was it? I keep thinking “candlestick,” but that’s Clue. Martini glass? Wad of bills? Bishop? I’m pretty sure I’ve seen a silver battleship, but either that’s just that expanded edition they were hawking a while ago, or I’m getting mental board game cross-pollination again. Well, it couldn’t have been all that great, so I’ll give it the generic stamp of mild disapproval. C-</div> </div>',
                'isPopular' => true,
            ],
        ]);
    }
}
