export const NAV_ITEMS = [
  { href: '#story', label: 'Our Story' },
  { href: '#itinerary', label: 'Itinerary' },
  { href: '#travels', label: 'Travels' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#info', label: 'Important Info' },
]

export const SECTION_IDS = ['story', 'itinerary', 'travels', 'gallery', 'info', 'note']

export const ITINERARY_ITEMS = [
  {
    id: 'arrival',
    day: 'Tuesday',
    time: 'Dec 22 • 10:00 AM onward',
    title: 'Arrival & Check-In',
    summary: 'A gentle landing window to settle in, refresh, and reconnect before the celebrations begin.',
    details:
      'Guests can arrive through the morning and afternoon, check into the resort, and take time to unwind before the evening festivities begin.',
    dressCode: 'Resort chic and travel-comfortable layers',
    location: 'Vikrama Resort welcome lobby and guest suites',
    note: 'Plan to arrive by mid-afternoon if you want a relaxed transition before Mehndi.',
    icon: 'luggage',
  },
  {
    id: 'mehndi',
    day: 'Tuesday',
    time: 'Dec 22 • 6:00 PM',
    title: 'Mehndi',
    summary: 'An intimate evening of henna, color, and easy conversation.',
    details:
      'The Mehndi celebration opens the wedding weekend with live artistry, music, and a warm gathering atmosphere for both families and friends.',
    dressCode: 'Bright Indian wear or festive garden-party colors',
    location: 'Courtyard lawn',
    note: 'Comfortable sandals are recommended for moving between indoor and outdoor spaces.',
    icon: 'spa',
  },
  {
    id: 'grah-shanti',
    day: 'Wednesday',
    time: 'Dec 23 • 9:00 AM',
    title: 'Grah Shanti',
    summary: 'A calm and meaningful morning ritual centered on blessings and intention.',
    details:
      'This ceremony marks a sacred start to the main wedding day events and is designed to be grounding, family-centered, and spiritually reflective.',
    dressCode: 'Traditional attire in soft or light tones',
    location: 'Temple pavilion',
    note: 'Guests who want a quieter moment in the schedule should prioritize this ceremony.',
    icon: 'temple_hindu',
  },
  {
    id: 'haldi',
    day: 'Wednesday',
    time: 'Dec 23 • 11:30 AM',
    title: 'Haldi',
    summary: 'Playful, joyful, and full of sunshine energy.',
    details:
      'The Haldi is one of the liveliest parts of the celebration, with turmeric rituals, laughter, and a more carefree pace that often becomes delightfully messy.',
    dressCode: 'Yellow, gold, or outfits you do not mind getting a little colorful',
    location: 'Poolside terrace',
    note: 'Bring sunglasses and avoid delicate fabrics if you want to join in closely.',
    icon: 'wb_sunny',
  },
  {
    id: 'sangeet',
    day: 'Wednesday',
    time: 'Dec 23 • 7:30 PM',
    title: 'Sangeet',
    summary: 'A high-energy evening of performances, music, and celebration.',
    details:
      'Families and friends come together for dancing, performances, and a vibrant night that sets the tone for the wedding itself.',
    dressCode: 'Glamorous Indian evening wear',
    location: 'Grand celebration hall',
    note: 'This is the most performance-forward event of the weekend, so expect a later finish.',
    icon: 'music_note',
  },
  {
    id: 'wedding',
    day: 'Thursday',
    time: 'Dec 24 • 4:30 PM',
    title: 'Wedding Ceremony',
    summary: 'The heart of the weekend, surrounded by the Pavagadh landscape at golden hour.',
    details:
      'The ceremony brings together tradition, family, and the mountain backdrop for the central moment of the celebration weekend.',
    dressCode: 'Formal Indian attire',
    location: 'Sunset mandap lawn',
    note: 'Arrive a little early to settle in and enjoy the setting before the procession begins.',
    icon: 'favorite',
  },
]

export const TRAVEL_SLIDES = [
  {
    id: 'resort-arrival',
    image: '',
    alt: 'Placeholder for resort arrival entrance',
    title: 'Resort Arrival',
    caption: 'A serene first impression with heritage architecture and a calm hillside welcome.',
    tag: 'First look',
    icon: 'holiday_village',
  },
  {
    id: 'ceremony-vibes',
    image: '',
    alt: 'Placeholder for ceremony lawn vibes',
    title: 'Ceremony Vibes',
    caption: 'Open-air views, warm light, and a setting designed for a destination celebration.',
    tag: 'Venue mood',
    icon: 'landscape',
  },
  {
    id: 'guest-spaces',
    image: '',
    alt: 'Placeholder for guest suite and common spaces',
    title: 'Guest Spaces',
    caption: 'Comfortable rooms and gathering spaces to make the wedding weekend feel easy and unhurried.',
    tag: 'Stay',
    icon: 'king_bed',
  },
  {
    id: 'sunset-scenes',
    image: '',
    alt: 'Placeholder for sunset and surrounding scenery',
    title: 'Sunset Scenes',
    caption: 'Golden-hour views and lush scenery that shape the atmosphere of the celebrations.',
    tag: 'Scenery',
    icon: 'wb_twilight',
  },
]

export const TRAVEL_FACTS = [
  {
    label: 'Venue',
    value: 'Vikrama Heritage Resort, Hill Base Road, Champaner–Pavagadh, Gujarat',
  },
  {
    label: 'Directions',
    value: 'Open Google Maps route',
    href: 'https://www.google.com/maps/dir/?api=1&destination=Vikrama+Heritage+Pavagadh+Gujarat',
  },
  {
    label: 'Nearest airport',
    value: 'Vadodara Airport (BDQ) is the most convenient option, roughly 45–60 minutes from the resort depending on traffic.',
  },
  {
    label: 'Alternate airport',
    value: 'Ahmedabad Airport (AMD) offers more flight options and is roughly 2.5 hours away by road.',
  },
  {
    label: 'Travel agent',
    value: 'Jaina Modi',
  },
  {
    label: 'Airport transfers',
    value: 'Pre-booked hotel cars or private cabs are the easiest option for groups arriving with luggage.',
  },
  {
    label: 'From airport to resort',
    value: 'Coordinate arrival times in advance so guests landing close together can share transfers and reduce wait time.',
  },
]

export const PACKING_GROUPS = [
  {
    title: 'Clothes',
    items: ['Light daywear for travel and downtime', 'Breathable evening outfits', 'A shawl or light layer for late-night breezes'],
  },
  {
    title: 'Ceremony Outfits',
    items: ['Mehndi color-forward attire', 'Yellow or gold pieces for Haldi', 'Formal wedding attire with accessories ready'],
  },
  {
    title: 'Footwear',
    items: ['Comfortable flats or sandals', 'One dressier option for evening events', 'Backup shoes for outdoor walking'],
  },
  {
    title: 'Weather & Comfort',
    items: ['Sunscreen', 'Sunglasses', 'Mini fan or cooling wipes', 'Basic medicines and hydration packets'],
  },
  {
    title: 'Travel Essentials',
    items: ['Passport and visa documents', 'Booking confirmations', 'Portable charger', 'Universal adapter if needed'],
  },
  {
    title: 'Wedding Weekend Extras',
    items: ['Gift or card', 'Jewelry pouch', 'Steamer-safe garment bag', 'A small tote for event-to-event essentials'],
  },
]

export const GALLERY_SLIDES = [
  {
    id: 'welcome-night',
    image: '',
    title: 'Welcome Evening',
    caption: 'The first hugs, the first arrivals, and that shared feeling that the wedding weekend has officially begun.',
    tag: 'Arrival',
    icon: 'celebration',
  },
  {
    id: 'mehndi-moments',
    image: '',
    title: 'Mehndi Moments',
    caption: 'Henna, music, and little pockets of conversation that make destination weddings feel intimate.',
    tag: 'Dec 22',
    icon: 'brush',
  },
  {
    id: 'ritual-morning',
    image: '',
    title: 'Sacred Morning',
    caption: 'A slower ceremonial rhythm filled with blessings, family, and the beauty of tradition.',
    tag: 'Dec 23 AM',
    icon: 'self_improvement',
  },
  {
    id: 'haldi-joy',
    image: '',
    title: 'Haldi Joy',
    caption: 'Sun-soaked colors, laughter, and the playful energy that makes Haldi unforgettable.',
    tag: 'Dec 23 Noon',
    icon: 'emoji_emotions',
  },
  {
    id: 'sangeet-night',
    image: '',
    title: 'Sangeet Night',
    caption: 'The stage lights, the performances, and the kind of dancing that turns into core memory territory.',
    tag: 'Dec 23 PM',
    icon: 'queue_music',
  },
  {
    id: 'wedding-golden-hour',
    image: '',
    title: 'Golden Hour Wedding',
    caption: 'The ceremony itself, set against the hillside as the light softens and everyone gathers close.',
    tag: 'Dec 24',
    icon: 'favorite',
  },
]

export const FAQ_GROUPS = [
  {
    title: 'Travel Readiness',
    description: 'The practical items guests usually need to sort before international wedding travel.',
    items: [
      {
        question: 'Travel insurance',
        answer:
          'Strongly recommended for flight changes, delayed baggage, and unexpected medical needs while traveling. Choose a policy that covers international health care and trip interruption.',
      },
      {
        question: 'Visa',
        answer:
          'Please confirm your India entry requirements based on your passport nationality before booking. Requirements vary, so treat this as a final-check item before travel.',
      },
      {
        question: 'Passport validity',
        answer:
          'Check that your passport has enough remaining validity for international travel and at least a few blank pages. Confirm the latest requirement that applies to your nationality before departure.',
      },
      {
        question: 'Vaccines',
        answer:
          'Review your routine vaccines and speak with your doctor or travel clinic if you want destination-specific advice. Health guidance can change, so verify closer to departure.',
      },
      {
        question: 'Required documents',
        answer:
          'Keep your passport, visa approval, flight details, hotel details, and travel insurance information together in both printed and digital form.',
      },
    ],
  },
  {
    title: 'On-the-Ground Support',
    description: 'Quick-reference details to make travel easier once you are in India.',
    items: [
      {
        question: 'Emergency details',
        answer:
          'For urgent help in India, use 112 for the national emergency response system. Keep your hotel name, room number, and location pin handy when calling.',
        highlight: true,
      },
      {
        question: 'Hospital / EMS',
        answer:
          '112 routes emergency requests nationally, including medical emergencies. In many areas, 108 ambulance services may also still operate locally, but 112 is the safest primary number to remember.',
        highlight: true,
      },
      {
        question: 'eSIM and cellular data',
        answer:
          'If your phone supports eSIM, plan your data setup before departure or at the airport. A local SIM or eSIM will make transfers, maps, and guest coordination much easier.',
      },
    ],
  },
]

export const ENVELOPE_NOTE = {
  eyebrow: 'A note before you travel',
  title: 'A few gentle reminders',
  body:
    'We want this weekend to feel joyful, easy, and beautifully unhurried. Once your flights are booked, please keep your documents together, share your arrival window with your group, and pack for both celebration and comfort.',
  reminders: [
    'Save the resort address and directions link before you fly.',
    'Keep one wedding-ready outfit in your carry-on if you are arriving close to an event.',
    'Set up your phone data plan in advance so transfers and group chats stay simple.',
  ],
  closing: 'With love and excitement, Shruti & Shubham',
}
