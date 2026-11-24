import imphephoBundleImg from '../assets/images/product_imphepho_bundle_1795441212002.jpg';
import sankofaBeadsImg from '../assets/images/product_sankofa_beads_1795441214085.jpg';
import clayLibationImg from '../assets/images/product_clay_libation_vessel_1795441214305.jpg';
import pileaPlantImg from '../assets/images/product_pilea_money_plant_1795441214418.jpg';
import homeProtectionImg from '../assets/images/product_home_protection_blend_1795441832102.jpg';
import { ProductCategory, ProductItem } from '../types';

export const PRODUCT_CATEGORIES: { id: 'all' | ProductCategory; label: string }[] = [
  { id: 'all', label: 'All Offerings' },
  { id: 'incense-resins', label: 'Incense & Resins' },
  { id: 'living-plants', label: 'Living Money Plants' },
  { id: 'sacred-crafts', label: 'Sacred Crafts' },
  { id: 'botanical-blends', label: 'Botanical Blends' },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'sacred-imphepho-bundle',
    name: 'Sacred Imphepho Cleansing Bundle',
    subtitle: 'Helichrysum odoratissimum · Sun-Cured Mountain Harvest',
    category: 'incense-resins',
    categoryLabel: 'Incense & Resins',
    origin: 'Eastern Cape Highlands',
    botanicalOrMaterial: 'Wild-harvested dried silver everlasting stems tied with natural raffia',
    availability: 'In Stock',
    image: imphephoBundleImg,
    imageAlt: 'Sun-dried Imphepho sage bundles bound with natural raffia twine on woven tray',
    shortDesc:
      'Traditionally burned in Southern African homes to clear heavy atmosphere, honor lineage reflection, and welcome stillness before meditation.',
    culturalStory:
      'Known across Xhosa and Zulu traditions as the sacred incense of ancestral communication, Imphepho releases an earthy, honey-warm aroma that anchors quiet morning prayer and home sanctuary transitions.',
    ritualUse:
      'Light the tip of a dry leaf stem over a heat-safe clay or shell vessel until it gently smolders. Extinguish the flame and carry the fragrant smoke thoughtfully through entryways or quiet study corners.',
    careInstructions:
      'Store in a cool, dry cedar box or linen pouch away from direct kitchen humidity. Keep out of reach of children and never leave smoldering stems unattended.',
    variants: [
      { id: 'imphepho-single', label: 'Single Ceremonial Bundle', weightOrSize: '45g · 18cm', inStock: true },
      { id: 'imphepho-trio', label: 'Sanctuary Trio Set', weightOrSize: '3 × 45g Bundles', inStock: true },
    ],
  },
  {
    id: 'man-power-tea-herbal',
    name: 'Man Power Tea Herbal',
    subtitle: 'Traditional Roots & Botanicals · Energy & Stamina Infusion',
    category: 'botanical-blends',
    categoryLabel: 'Botanical Blends',
    origin: 'Sanctuary Herbal Guild',
    botanicalOrMaterial:
      'Manpower root, cinnamon cassia, ginseng, cistanche, moringa leaf, cloves, astragalus, and peppermint',
    availability: 'In Stock',
    image: '/assets/aistudio/image_17ddc92f_4409439f.jpg',
    imageAlt:
      'Man Power Tea Herbal pouch beside a steaming black ceramic cup of amber herbal infusion and wooden spoon of dried roots and leaves',
    shortDesc:
      'A rich traditional herbal tea infusion crafted with invigorating roots, warming spices, and moringa leaf to support daily energy, vitality, and stamina.',
    culturalStory:
      'Drawing from time-honored herbal rootcraft, this robust botanical blend combines earthy roots, aromatic cloves, cinnamon bark, and green moringa for grounded strength and steady daily vigor.',
    ritualUse:
      'Steep one herbal pouch in freshly boiled water for 5 to 8 minutes. Enjoy warm in the morning or afternoon as part of an intentional routine for focus, physical vitality, and calm endurance.',
    careInstructions:
      'Reseal pouch tightly after each use and store in a cool, dry cupboard. Offered as a traditional herbal beverage for daily vitality, not a clinical medical treatment.',
    variants: [
      { id: 'man-power-30', label: '30 Herbal Tea Pouches', weightOrSize: '30 Tea Pouches', inStock: true },
      { id: 'man-power-60', label: '60 Pouches Sanctuary Pack', weightOrSize: '2 × 30 Tea Pouches', inStock: true },
    ],
  },
  {
    id: 'pilea-peperomioides-money-plant',
    name: 'Pilea Peperomioides Living Plant',
    subtitle: 'Chinese Money Plant · Hand-Potted Terracotta Edition',
    category: 'living-plants',
    categoryLabel: 'Living Money Plants',
    origin: 'Sanctuary Nursery',
    botanicalOrMaterial: 'Established living botanical in breathable clay pot with mineral soil',
    availability: 'Small Batch',
    image: pileaPlantImg,
    imageAlt: 'Healthy green Pilea Peperomioides money plant in handcrafted terracotta pot',
    shortDesc:
      'Celebrated in abundance traditions for its coin-shaped emerald leaves—nurtured to bring thriving greenery, steady focus, and harmonious energy to desks and living rooms.',
    culturalStory:
      'Often called the Friendship and Prosperity Plant because it freely sends up young offshoots to share, the Pilea reminds households and entrepreneurs that generous stewardship multiplies harmony.',
    ritualUse:
      'Place in your bright home office, reception desk, or eastern windowsill where morning light encourages steady, balanced growth alongside daily business intentions.',
    careInstructions:
      'Water thoroughly only when the top two inches of soil feel dry. Provide bright, indirect sunlight and rotate a quarter-turn weekly for symmetrical coin-shaped foliage.',
    variants: [
      { id: 'pilea-desk', label: 'Desk Sanctuary Size', weightOrSize: '12cm Clay Pot', inStock: true },
      { id: 'pilea-hearth', label: 'Mature Hearth Specimen', weightOrSize: '16cm Artisan Pot', inStock: true },
    ],
  },
  {
    id: 'sankofa-mahogany-beads',
    name: 'Hand-Carved Sankofa Mahogany Beads',
    subtitle: 'West African Woodcraft · 36-Bead Meditation Strand',
    category: 'sacred-crafts',
    categoryLabel: 'Sacred Crafts',
    origin: 'Kumasi Craft Guild, Ghana',
    botanicalOrMaterial: 'Kiln-cured mahogany beads finished with unrefined shea oil and brass spacer',
    availability: 'Small Batch',
    image: sankofaBeadsImg,
    imageAlt: 'Hand-carved wooden Sankofa meditation beads with matte brass accents on natural linen',
    shortDesc:
      'Tactile hand-turned mahogany prayer and mindfulness beads finished in natural shea butter to anchor breath pacing and ancestral gratitude.',
    culturalStory:
      'Inspired by the Akan Adinkra emblem Sankofa—"go back and fetch what is precious"—these beads invite quiet reverence for the wisdom passed down through previous generations.',
    ritualUse:
      'Hold one bead per slow exhale during morning reflection or evening grounding, letting the warm oiled grain bring calm presence to hurried thoughts.',
    careInstructions:
      'Rub lightly with a drop of natural shea or olive oil twice a year to preserve wood luster. Avoid soaking in water.',
    variants: [
      { id: 'sankofa-wrist', label: 'Wrist Reflection Strand', weightOrSize: '18 Beads · Elastic', inStock: true },
      { id: 'sankofa-altar', label: 'Full 36-Bead Sanctuary Strand', weightOrSize: '36 Beads · Linen Cord', inStock: true },
    ],
  },
  {
    id: 'terracotta-libation-vessel',
    name: 'Hand-Thrown Terracotta Libation Vessel',
    subtitle: 'Earth-Fired Ceremonial Bowl · Adinkra Rim Engraving',
    category: 'sacred-crafts',
    categoryLabel: 'Sacred Crafts',
    origin: 'Bolgatanga Pottery Collective',
    botanicalOrMaterial: 'Lead-free natural river clay finished with burnished mineral slip',
    availability: 'Small Batch',
    image: clayLibationImg,
    imageAlt: 'Hand-thrown dark terracotta libation vessel with geometric rim etching',
    shortDesc:
      'An heirloom hand-coiled clay chalice crafted for pouring cool water libations, holding sacred herbs, or grounding a quiet family altar.',
    culturalStory:
      'In African ancestral hospitality, pouring clean water onto earth or into a dedicated clay vessel honors memory, peace, and unbroken continuity with elders.',
    ritualUse:
      'Fill with fresh spring water or hold whole dried botanicals during family gatherings, seasonal gratitude ceremonies, or peaceful morning silence.',
    careInstructions:
      'Rinse gently with warm water and soft cloth only; do not place in a dishwasher or expose to harsh chemical detergents.',
    variants: [
      { id: 'vessel-medium', label: 'Altar Chalice', weightOrSize: '14cm Diameter', inStock: true },
      { id: 'vessel-hearth', label: 'Ceremonial Gathering Bowl', weightOrSize: '20cm Diameter', inStock: true },
    ],
  },
  {
    id: 'home-protection-guardian-blend',
    name: 'Threshold Shield & Home Protection Blend',
    subtitle: 'Traditional Boundary Botanicals · Thieves, Bad Watchers & Misfortune',
    category: 'botanical-blends',
    categoryLabel: 'Botanical Blends',
    origin: 'Sanctuary Apothecary Guild',
    botanicalOrMaterial: 'Sun-cured rosemary, whole black peppercorns, cloves, sacred guardian root bark, and coarse mineral sea salt',
    availability: 'In Stock',
    image: homeProtectionImg,
    imageAlt: 'Amber apothecary jar and dark indigo linen pouch with rosemary, black peppercorns, star anise, cloves, sacred roots, and mineral sea salt for home protection',
    shortDesc:
      'A time-honored threshold and hearth botanical blend crafted to fortify your home against thieves, envious or ill-wishing watchers, and lingering bad luck.',
    culturalStory:
      'Across traditional African homestead stewardship, pungent roots, mineral salt, and sharp aromatic spices have long been placed near doorways and windows to turn away unwanted intrusion, jealous eyes, and restless misfortune.',
    ritualUse:
      'Place a small pinch in the enclosed indigo pouch above your front doorway or inside a shallow threshold dish near windows and gates. Refresh at the start of each new moon while speaking intentions of safety and peace over your household.',
    careInstructions:
      'For external threshold placement and aromatic ritual use only—do not ingest. Store the sealed amber jar away from moisture and out of reach of pets or young children.',
    variants: [
      { id: 'protection-jar', label: 'Doorway Shield Jar & Pouch (90g)', weightOrSize: 'Jar + 1 Indigo Pouch', inStock: true },
      { id: 'protection-homestead', label: 'Four-Corner Homestead Set (220g)', weightOrSize: 'Jar + 4 Boundary Pouches', inStock: true },
    ],
  },
];
