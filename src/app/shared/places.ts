import {Place} from "./place";

export const PLACES: Place[] = [
  {
    id: 0,
    featured: true,
    name: 'Muir Woods',
    image: 'assets/images/forest.jpg',
    category: 'mains',
    description: 'Muir Woods National Monument is part of California’s Golden Gate National Recreation Area',
    descriptionlong: 'Muir Woods National Monument is part of California’s Golden Gate National Recreation Area, north of San Francisco. It’s known for its towering old-growth redwood trees. Trails wind among the trees to Cathedral Grove and Bohemian Grove, and along Redwood Creek. The Ben Johnson and Dipsea trails climb a hillside for views of the treetops, the Pacific Ocean and Mount Tamalpais in adjacent Mount Tamalpais State Park.',
    comments: [
      {
        rating: 5,
        comment: 'Amazing forest!',
        author: 'John Doe',
        date: '2012-10-16T17:57:28.556094Z'
      },
      {
        rating: 4,
        comment: 'Crowded but overall great experience.',
        author: 'Erma Dorsey',
        date: '2014-09-05T17:57:28.556094Z'
      },
      {
        rating: 3,
        comment: 'Parking reservations required.',
        author: 'Ann J. Banda',
        date: '2015-02-13T17:57:28.556094Z'
      },
      {
        rating: 4,
        comment: 'Enjoyed all the trees.',
        author: 'Terence Williams',
        date: '2013-12-02T17:57:28.556094Z'
      },
      {
        rating: 2,
        comment: 'Way too cold and cloudy.',
        author: 'Robert A. Torres',
        date: '2011-12-02T17:57:28.556094Z'
      }
    ]
  },
  {
    id: 1,
    featured: true,
    name: 'Half Moon Bay',
    image: '../../assets/images/beach-2179624_1920.jpg',
    category: 'appetizer',
    description: 'Half Moon Bay is a small city on the California coast, south of San Francisco.',
    descriptionlong: 'Half Moon Bay is a small city on the California coast, south of San Francisco. A string of beaches along the bay includes Half Moon Bay State Beach. The Coastside Trail leads north to Pillar Point, near the huge waves of the Mavericks surf spot. Nearby, Montara Mountain rises in the protected Rancho Corral de Tierra area. The Purisima Creek Redwoods Preserve is on the slopes of the Santa Cruz Mountains.',
    comments: [
      {
        rating: 5,
        comment: 'Beach town was beautiful, lots of fun things to do.',
        author: 'Cary Spiegel',
        date: '2012-10-16T17:57:28.556094Z'
      },
      {
        rating: 4,
        comment: 'Had a lot of fun, wanted more options of things to do.',
        author: 'Mary Becker',
        date: '2014-09-05T17:57:28.556094Z'
      },
      {
        rating: 3,
        comment: 'Not a lot to do but enjoyable.',
        author: 'James Truong',
        date: '2015-02-13T17:57:28.556094Z'
      },
      {
        rating: 4,
        comment: 'A little cold but had a great time.',
        author: 'Monica Grubbs',
        date: '2013-12-02T17:57:28.556094Z'
      },
      {
        rating: 2,
        comment: 'Traffic was really bad had to wait a long time to get there.',
        author: 'James Merz',
        date: '2011-12-02T17:57:28.556094Z'
      }
    ]
  },
  {
    id: 2,
    featured: false,
    name: 'Yosemite',
    image: '../../assets/images/yosemite-1936635_1920.jpg',
    category: 'appetizer',
    description: 'Yosemite National Park is in California’s Sierra Nevada mountains.',
    descriptionlong: 'Yosemite National Park is in California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome. In Yosemite Village are shops, restaurants, lodging, the Yosemite Museum and the Ansel Adams Gallery, with prints of the photographer’s renowned black-and-white landscapes of the area.',
    comments: [
      {
        rating: 5,
        comment: 'Most beautiful park in the world.',
        author: 'Loretta Bradshaw',
        date: '2012-10-16T17:57:28.556094Z'
      },
      {
        rating: 4,
        comment: 'Weather was not great but we managed to have fun regardless.',
        author: 'Amanda Brinegar',
        date: '2014-09-05T17:57:28.556094Z'
      },
      {
        rating: 3,
        comment: 'Touristy but overall not bad.',
        author: 'Barbara Downie',
        date: '2015-02-13T17:57:28.556094Z'
      },
      {
        rating: 4,
        comment: 'Crowded but had a great time anyways.',
        author: 'Julia Nichols',
        date: '2013-12-02T17:57:28.556094Z'
      },
      {
        rating: 2,
        comment: 'Very touristy and very crowded.',
        author: 'Doris Stroud',
        date: '2011-12-02T17:57:28.556094Z'
      }
    ]
  },
  {
    id: 3,
    featured: false,
    name: 'Lake Tahoe',
    image: '../../assets/images/landscape-1802337.jpg',
    category: 'dessert',
    description: 'Lake Tahoe is a large freshwater lake in the Sierra Nevada Mountains',
    descriptionlong: 'Lake Tahoe is a large freshwater lake in the Sierra Nevada Mountains, straddling the border of California and Nevada. It’s known for its beaches and ski resorts. On the southwest shore, Emerald Bay State Park contains the 1929 Nordic-style mansion Vikingsholm. Along the lake’s northeast side, Lake Tahoe Nevada State Park includes Sand Harbor Beach and Spooner Lake, a gateway to the long-distance Tahoe Rim Trail.',
    comments: [
      {
        rating: 5,
        comment: 'Amazing place to visit all year round.',
        author: 'John Figueroa',
        date: '2012-10-16T17:57:28.556094Z'
      },
      {
        rating: 4,
        comment: 'Had a great time during the summer.',
        author: 'Lori Elder',
        date: '2014-09-05T17:57:28.556094Z'
      },
      {
        rating: 3,
        comment: 'Too crowded but overall not bad.',
        author: 'David Ray',
        date: '2015-02-13T17:57:28.556094Z'
      },
      {
        rating: 4,
        comment: 'Enjoyed my time there.',
        author: 'Jamie Demartini',
        date: '2013-12-02T17:57:28.556094Z'
      },
      {
        rating: 2,
        comment: 'Not a lot of snow this winter, ok experience.',
        author: 'Jesse Stone',
        date: '2011-12-02T17:57:28.556094Z'
      }
    ]
  }

];


