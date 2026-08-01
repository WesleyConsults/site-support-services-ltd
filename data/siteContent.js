export const companyInfo = {
  name: "Site Support Services Limited",
  shortName: "Site Support Services",
  tagline: "Reliability at hand",
  taglineSecondary: "Management | Catering | Logistics",
  foundedYear: 2026, // For footer copyright
  phones: [
    { label: "Primary Phone", value: "+233 (0) 24 378 8907", link: "+233243788907" },
    { label: "Secondary Phone", value: "+233 (0) 57 264 3305", link: "+233572643305" }
  ],
  emails: [
    { label: "Primary Contact", address: "sitesservice17@gmail.com" }
  ],
  location: "Number 9 Shippers Road, Adjacent Shippers Council, Takoradi, Ghana",
  postalAddress: "P.O. Box 634, Takoradi, Ghana",
  website: "www.sitesupportservicesgh.com",
  aboutSummary: "Site Support Services Limited is a Takoradi-based support services company providing reliable and professional services to organizations operating in demanding industrial and commercial environments.",
  aboutDetailed: "Site Support Services Limited is a dynamic and professional support services company based in Takoradi, Ghana. We provide reliable management, catering, logistics, manpower, facility, and operational support solutions to clients across the Oil & Gas, Construction, Hospitality, Mining, and industrial sectors.\n\nWith a highly experienced and dedicated team, we help businesses operate more efficiently by handling essential support services such as remote catering, camp management, manpower support, logistics, equipment rental, office and accommodation solutions, cleaning, fumigation, and supply chain services.\n\nOur goal is to provide dependable, timely, and practical support that allows our clients to focus on their core operations while we take care of the services that keep their sites, teams, and projects running smoothly.",
  mission: "To provide reliable, professional, and efficient support services that help clients operate safely, smoothly, and successfully across industrial, commercial, and remote work environments.",
  vision: "To become a leading support services provider in Ghana and beyond, recognized for reliability, professionalism, and excellence in site management, catering, logistics, and operational support.",
  managingDirector: "Akwasi Awuah Nsiah",
  mdQuote: "Site Support Services Limited is led by Akwasi Awuah Nsiah, Managing Director, with a focus on delivering reliable, professional, and responsive support services to clients across Ghana’s industrial and commercial sectors."
};

export const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" }
];

export const services = [
  {
    id: "catering",
    slug: "onshore-offshore-remote-catering",
    serviceCode: "SSS-CAT-01",
    title: "Onshore, Offshore and Remote Catering",
    iconName: "ChefHat",
    shortDescription: "We provide reliable catering solutions for onshore, offshore, and remote project environments, ensuring nutritious meals and strict hygiene for industrial workforces.",
    description: "We provide reliable catering solutions for onshore, offshore, and remote project environments. Our catering service is designed to support workers and teams with quality meals, timely service, and dependable hospitality support wherever operations are located.",
    fullDescription: "Site Support Services Limited delivers full-service industrial catering solutions designed for demanding field operations, marine vessels, offshore rigs, and isolated work sites. Good nutrition and timely dining services are vital for workforce health, morale, and overall site productivity.\n\nOur catering team coordinates menu planning, ingredient procurement, kitchen administration, and daily dining service with strict hygiene controls. Whether catering for a coastal onshore facility or a remote worker encampment, we ensure dependable food supply chains and professional stewards.",
    bullets: [
      "Onshore site catering",
      "Offshore vessel and rig catering",
      "Remote camp kitchen management",
      "Nutritious, high-quality meal preparation",
      "Experienced industrial chefs and stewards",
      "Rigid food safety and hygiene controls"
    ],
    heroImage: "/images/services/catering-hero-ghana.jpg",
    heroAlt: "Industrial kitchen chef preparing meals for site workforce catering",
    galleryImages: [
      {
        src: "/images/services/catering-gallery-ghana.jpg",
        alt: "Organized remote camp dining hall and high-volume catering setup",
        caption: "High-capacity dining setup prepared for remote workforce meal service."
      }
    ],
    relatedSlugs: ["facilities-camp-management", "wholesale-retail-supply", "manpower-management"],
    seoTitle: "Onshore, Offshore and Remote Catering | Site Support Services Limited",
    seoDescription: "Professional onshore, offshore, and remote site catering solutions in Ghana by Site Support Services Limited. Nutritious menu planning, food safety, and stewards for industrial sites."
  },
  {
    id: "qhse",
    slug: "qhse-consultancy",
    serviceCode: "SSS-QHS-02",
    title: "QHSE Consultancy Services",
    iconName: "ShieldCheck",
    shortDescription: "Our QHSE consultancy services support organizations in maintaining safe, responsible, and compliant work environments across industrial sectors.",
    description: "Our QHSE consultancy services support organizations in maintaining safe, responsible, and compliant work environments. We assist clients with quality, health, safety, and environmental practices that help protect workers, improve operations, and reduce workplace risk.",
    fullDescription: "Maintaining uncompromising Quality, Health, Safety, and Environmental (QHSE) standards is critical for industrial, mining, and maritime projects in Ghana. Site Support Services Limited offers structured advisory support to help organizations establish robust safety protocols and meet regulatory requirements.\n\nWe assist clients in conducting thorough risk assessments, preparing workplace safety guidelines, coordinating worker safety briefings, and conducting periodic compliance reviews. Our objective is to minimize operational hazards and foster a culture of proactive workplace safety.",
    bullets: [
      "Workplace health and safety advisory",
      "QHSE compliance audits and reporting",
      "Industrial safety training coordination",
      "Environmental management plans",
      "Quality control process design",
      "Risk assessment and mitigation support"
    ],
    heroImage: "/images/services/qhse-hero-ghana.jpg",
    heroAlt: "Industrial safety inspection and QHSE audit on work site",
    galleryImages: [
      {
        src: "/images/services/qhse-gallery-ghana.jpg",
        alt: "Workplace safety team reviewing compliance checklist and risk management procedures",
        caption: "On-site safety team reviewing operational risk assessments and safety protocols."
      }
    ],
    relatedSlugs: ["manpower-management", "facilities-camp-management", "equipment-vehicle-rental"],
    seoTitle: "QHSE Consultancy Services | Site Support Services Limited",
    seoDescription: "Industrial QHSE consultancy and compliance services in Ghana. Risk assessments, workplace health & safety advisory, and environmental management by Site Support Services Limited."
  },
  {
    id: "equipment-rental",
    slug: "equipment-vehicle-rental",
    serviceCode: "SSS-EQUIPMENT-RENTAL",
    title: "Equipment and Vehicle Rental",
    iconName: "Truck",
    shortDescription: "We supply heavy machinery, site utility equipment, forklifts, RoRo tractors, terminal tractors, trailers, and reach stackers for port, cargo, and field operations.",
    description: "We provide equipment and vehicle rental solutions for companies that require reliable resources for projects, site operations, staff movement, logistics, and field work. Our rental support helps clients access the tools and vehicles they need without unnecessary operational delays.",
    fullDescription: "Capital investment in machinery and fleet vehicles can burden project budgets. Site Support Services Limited provides practical equipment and vehicle rental solutions tailored to project timelines in construction, oil & gas, logistics, and port operations.\n\nOur rental fleet includes heavy-duty forklifts, Roll-on/Roll-off (RoRo) tractors, terminal tractors, specialized trailers (RTL & TTL), reach stackers, transport vehicles, and site support machinery. All equipment undergoes regular maintenance to ensure maximum reliability and safety during heavy cargo handling and field operations.",
    bullets: [
      "Industrial vehicle and transport rentals",
      "Heavy-duty forklifts (3-ton to 18-ton capacity)",
      "RoRo and terminal tractor tug masters",
      "Roll trailers (RTL) & terminal trailers (TTL)",
      "46-ton reach stacker (RST) container handling",
      "Flexible project-based rental durations and operator support"
    ],
    heroImage: "/images/services/equipment-hero-ghana.jpg",
    heroAlt: "Industrial transport vehicles and port equipment ready for fleet dispatch",
    galleryImages: [
      {
        src: "/images/services/equipment-gallery-ghana.jpg",
        alt: "Heavy construction machinery for site operations rental",
        caption: "Reliable heavy machinery available for flexible project-based lease terms."
      }
    ],
    relatedSlugs: ["supply-chain-logistics", "manpower-management", "office-accommodation-rental"],
    seoTitle: "Equipment and Vehicle Rental | Site Support Services Limited",
    seoDescription: "Explore heavy-duty forklifts, RoRo tractors, terminal tractors, trailers, reach stackers, and equipment rental support from Site Support Services Limited in Ghana."
  },
  {
    id: "accommodation-rental",
    slug: "office-accommodation-rental",
    serviceCode: "SSS-ACC-04",
    title: "Office and Accommodation Rental",
    iconName: "Building2",
    shortDescription: "Practical office spaces and residential accommodation solutions for project teams, field engineers, consultants, and site personnel.",
    description: "We assist clients with office and accommodation rental solutions for project teams, staff, consultants, and operational personnel. Our service supports companies that require practical, comfortable, and accessible spaces for work and residence.",
    fullDescription: "Establishing functional offices and comfortable housing for project personnel is vital when mobilizing operations near industrial centers or port facilities like Takoradi. Site Support Services Limited assists client companies with fully serviced temporary offices and residential lodgings.\n\nWe coordinate office setups equipped with basic operational utilities, internet connectivity, and secure access. For executive consultants and workforce crews, we identify and manage comfortable, strategically located lodgings close to key project sites.",
    bullets: [
      "Temporary project offices",
      "Staff housing and residential spaces",
      "Guest accommodation for consultants",
      "Close proximity to strategic sites and ports",
      "Fully serviced office environments",
      "Flexible lease arrangements"
    ],
    heroImage: "/images/services/accommodation-hero-ghana.jpg",
    heroAlt: "Serviced project office environment for staff and operational teams",
    galleryImages: [
      {
        src: "/images/services/accommodation-gallery-ghana.jpg",
        alt: "Furnished accommodation living space for site consultants and workforce personnel",
        caption: "Comfortable, fully serviced staff accommodation near strategic project sites."
      }
    ],
    relatedSlugs: ["facilities-camp-management", "laundry-janitorial-fumigation", "equipment-vehicle-rental"],
    seoTitle: "Office and Accommodation Rental | Site Support Services Limited",
    seoDescription: "Serviced office spaces and staff accommodation rentals in Takoradi, Ghana. Practical, comfortable lodging and temporary offices for industrial project personnel."
  },
  {
    id: "camp-management",
    slug: "facilities-camp-management",
    serviceCode: "SSS-CMP-05",
    title: "Facilities and Camp Management",
    iconName: "Hotel",
    shortDescription: "Complete facility administration and remote worker camp management to keep remote operations clean, safe, organized, and functional.",
    description: "We provide facilities and camp management services for organizations operating in remote, industrial, and project-based environments. Our team helps manage the daily services required to keep camps, offices, accommodation areas, and work sites organized, clean, safe, and functional.",
    fullDescription: "Operating remote worker camps requires continuous administration across catering, hygiene, maintenance, security coordination, and resident welfare. Site Support Services Limited takes on full facility management so project managers can concentrate on core field operations.\n\nOur camp management teams handle daily site operations, waste removal, utility monitoring, accommodation steward services, and dining hall oversight. We maintain clean, disciplined, and healthy environments that support staff productivity and high operational standards.",
    bullets: [
      "Remote worker camp administration",
      "Daily site coordination and maintenance",
      "Sanitation, cleaning, and waste management",
      "Catering and dining hall coordination",
      "Welfare and recreation space management",
      "24/7 support desk and operations monitoring"
    ],
    heroImage: "/images/services/camp-hero-ghana.jpg",
    heroAlt: "Remote worker accommodation camp facility management and site layout",
    galleryImages: [
      {
        src: "/images/services/camp-gallery-ghana.jpg",
        alt: "Facility maintenance team keeping camp amenities operational and clean",
        caption: "Dedicated site staff managing daily facility maintenance and sanitation routines."
      }
    ],
    relatedSlugs: ["onshore-offshore-remote-catering", "laundry-janitorial-fumigation", "office-accommodation-rental"],
    seoTitle: "Facilities and Camp Management | Site Support Services Limited",
    seoDescription: "Integrated facilities and remote camp management services in Ghana. Complete camp administration, maintenance, sanitation, and catering coordination by Site Support Services Limited."
  },
  {
    id: "manpower",
    slug: "manpower-management",
    serviceCode: "SSS-MPW-06",
    title: "Offshore and Onshore Manpower Management",
    iconName: "Users",
    shortDescription: "Vetted skilled, semi-skilled, and general labour personnel for industrial, maritime, energy, and construction operations.",
    description: "We support clients with onshore and offshore manpower management by helping provide and coordinate personnel for industrial, operational, and project-based work. Our manpower support helps companies meet labour needs efficiently and reliably.",
    fullDescription: "Accessing dependable, skilled labour on short notice is essential for fast-paced industrial and offshore projects. Site Support Services Limited recruits, vets, and manages qualified technical and general personnel for onshore and offshore assignments.\n\nWe handle recruitment, identity verification, onboarding support, medical clearances, safety inductions, and administrative crew management. Whether you need specialized technicians or site assistance crews, we deliver reliable staffing solutions.",
    bullets: [
      "Skilled, semi-skilled, and general labour supply",
      "Onshore construction and industrial teams",
      "Offshore maritime and operational crew support",
      "Recruitment, vetting, and onboarding support",
      "Payroll administration and crew welfare",
      "Short-term project-based or long-term staffing"
    ],
    heroImage: "/images/services/manpower-hero-ghana.jpg",
    heroAlt: "Industrial site workforce crew equipped with safety gear for field operations",
    galleryImages: [
      {
        src: "/images/services/manpower-gallery-ghana.jpg",
        alt: "Skilled technical crew receiving pre-shift operational instructions",
        caption: "Vetted industrial and maritime personnel prepared for deployment."
      }
    ],
    relatedSlugs: ["qhse-consultancy", "equipment-vehicle-rental", "facilities-camp-management"],
    seoTitle: "Offshore and Onshore Manpower Management | Site Support Services Limited",
    seoDescription: "Skilled, semi-skilled, and general labour supply for onshore and offshore operations in Ghana. Professional manpower vetting and crew management services."
  },
  {
    id: "janitorial",
    slug: "laundry-janitorial-fumigation",
    serviceCode: "SSS-JNT-07",
    title: "Laundry, Janitorial and Fumigation Services",
    iconName: "Sparkles",
    shortDescription: "Comprehensive hygiene, industrial laundry, routine cleaning, and eco-friendly pest control for commercial and site environments.",
    description: "We provide laundry, janitorial, and fumigation services to help clients maintain clean, safe, and healthy environments. Our hygiene support services are suitable for offices, camps, accommodation facilities, industrial sites, and commercial spaces.",
    fullDescription: "Cleanliness and effective vector control are non-negotiable for worker health and safety. Site Support Services Limited delivers structured commercial cleaning, bulk industrial laundry, and certified fumigation services.\n\nWe utilize commercial-grade, eco-friendly sanitizers and industrial washing systems capable of handling heavy workwear. Our fumigation treatments eliminate pests safely, protecting living quarters, storage hubs, and office spaces in compliance with local regulations.",
    bullets: [
      "Industrial and bulk laundry services",
      "Office and accommodation janitorial cleaning",
      "Fumigation and pest control solutions",
      "Eco-friendly and industrial-grade cleaning materials",
      "Scheduled hygiene maintenance routines",
      "Compliance with local environmental health laws"
    ],
    heroImage: "/images/services/laundry-hero-ghana.jpg",
    heroAlt: "Industrial commercial laundry and hygiene maintenance equipment",
    galleryImages: [
      {
        src: "/images/services/laundry-gallery-ghana.jpg",
        alt: "Janitorial cleaning staff maintaining immaculate commercial workspace environment",
        caption: "Scheduled janitorial maintenance preserving sanitary workspace conditions."
      }
    ],
    relatedSlugs: ["facilities-camp-management", "office-accommodation-rental", "wholesale-retail-supply"],
    seoTitle: "Laundry, Janitorial and Fumigation Services | Site Support Services Limited",
    seoDescription: "Industrial laundry, commercial janitorial cleaning, and certified fumigation services in Ghana. Complete hygiene maintenance solutions by Site Support Services Limited."
  },
  {
    id: "logistics",
    slug: "supply-chain-logistics",
    serviceCode: "SSS-LOG-08",
    title: "Supply Chain and Logistics Services",
    iconName: "Boxes",
    shortDescription: "End-to-end supply chain sourcing, material transport, port dispatch, cargo movement, and warehouse inventory support.",
    description: "Our supply chain and logistics services help clients source, move, and manage the goods, materials, and resources needed for their operations. We support timely delivery, organized coordination, and reliable logistics solutions for businesses and project sites.",
    fullDescription: "Efficient logistics is the backbone of successful industrial operations. Based strategically in Takoradi, Site Support Services Limited links client supply chains from port entry points straight to remote inland project locations.\n\nOur team manages cargo receiving, temporary warehousing, inventory tracking, and ground transport dispatch. We ensure materials and critical equipment arrive safely and on schedule, reducing operational downtime across demanding site sectors.",
    bullets: [
      "Material sourcing and procurement support",
      "Secure delivery coordination to remote sites",
      "Transport and fleet dispatch management",
      "Warehouse and inventory support",
      "Project logistics for heavy cargo/machinery",
      "Local supply chain integration"
    ],
    heroImage: "/images/services/logistics-hero-ghana.jpg",
    heroAlt: "Port container logistics hub and cargo transport coordination",
    galleryImages: [
      {
        src: "/images/services/logistics-gallery-ghana.jpg",
        alt: "Warehouse inventory management and heavy freight dispatch",
        caption: "Organized warehouse management and material dispatch for industrial clients."
      }
    ],
    relatedSlugs: ["equipment-vehicle-rental", "wholesale-retail-supply", "travel-visa-acquisition"],
    seoTitle: "Supply Chain and Logistics Services | Site Support Services Limited",
    seoDescription: "Industrial supply chain management and cargo logistics in Takoradi, Ghana. Port transport, warehousing, and remote site delivery by Site Support Services Limited."
  },
  {
    id: "wholesale-supply",
    slug: "wholesale-retail-supply",
    serviceCode: "SSS-SUP-09",
    title: "Wholesale and Retail Supply",
    iconName: "Package",
    shortDescription: "Reliable bulk procurement and supply of industrial consumables, food provisions, safety gear (PPE), and office supplies.",
    description: "We provide wholesale and retail supply services for businesses and organizations that require dependable access to essential goods, materials, and consumables. Our supply service supports both project-based and regular operational needs.",
    fullDescription: "Maintaining essential site inventories requires dependable procurement channels. Site Support Services Limited acts as a single-source supplier for industrial consumables, personal protective equipment (PPE), dry food supplies, and office materials.\n\nThrough established merchant networks in Ghana, we procure high-standard goods at competitive wholesale rates and organize scheduled site deliveries. Our service prevents stockouts of safety gear and daily operational supplies.",
    bullets: [
      "Bulk supply of industrial consumables",
      "Office and camp stationery/supplies",
      "Catering raw materials and dry food supplies",
      "Safety gear (PPE) and cleaning inventory",
      "Timely delivery to project storage hubs",
      "Flexible retail and wholesale purchasing agreements"
    ],
    heroImage: "/images/services/supply-hero-ghana.jpg",
    heroAlt: "Industrial supply warehouse stocked with safety gear, PPE, and consumables",
    galleryImages: [
      {
        src: "/images/services/supply-gallery-ghana.jpg",
        alt: "Organized inventory of industrial consumables and site supplies",
        caption: "Continuous stock replenishment of PPE, consumables, and site supplies."
      }
    ],
    relatedSlugs: ["supply-chain-logistics", "onshore-offshore-remote-catering", "laundry-janitorial-fumigation"],
    seoTitle: "Wholesale and Retail Supply | Site Support Services Limited",
    seoDescription: "Bulk procurement and wholesale supply of PPE, industrial consumables, food provisions, and office goods in Ghana by Site Support Services Limited."
  },
  {
    id: "travel-support",
    slug: "travel-visa-acquisition",
    serviceCode: "SSS-TRV-10",
    title: "Travel and Visa Acquisition",
    iconName: "Plane",
    shortDescription: "Professional travel itinerary coordination, airport transfers, lodging arrangements, and visa document guidance for corporate teams.",
    description: "We assist clients with travel and visa acquisition support, helping individuals, staff, and business teams manage travel-related processes more conveniently and efficiently.",
    fullDescription: "Moving expatriate specialists, consultants, and corporate personnel in and out of Ghana requires precise coordination. Site Support Services Limited provides practical travel assistance to streamline travel schedules.\n\nWe assist client teams with visa application documentation guidance, flight reservations, airport transit pickups, and secure lodging arrangements. Our local administrative experience helps prevent transit delays for visiting personnel.",
    bullets: [
      "Corporate business travel coordination",
      "Visa documentation and application assistance",
      "Airport transfer and transport coordination",
      "Hotel and lodging bookings",
      "Expatriate relocation assistance",
      "Transit and immigration advice"
    ],
    heroImage: "/images/services/travel-hero-ghana.jpg",
    heroAlt: "Airport terminal departure gate for corporate travel and personnel transit",
    galleryImages: [
      {
        src: "/images/services/travel-gallery-ghana.jpg",
        alt: "Professional travel documentation, passport, and visa assistance review",
        caption: "Dedicated travel support assisting with visa paperwork and airport transfers."
      }
    ],
    relatedSlugs: ["supply-chain-logistics", "manpower-management", "office-accommodation-rental"],
    seoTitle: "Travel and Visa Acquisition | Site Support Services Limited",
    seoDescription: "Corporate travel planning, airport transfers, lodging, and visa acquisition assistance in Ghana by Site Support Services Limited."
  }
];

export const industries = [
  {
    id: "oil-gas",
    title: "Oil & Gas",
    iconName: "Fuel",
    description: "Supporting upstream, midstream, and downstream operations with marine crew management, remote offshore catering, high-standard safety compliance, and specialized industrial logistics."
  },
  {
    id: "construction",
    title: "Construction",
    iconName: "HardHat",
    description: "Providing on-site worker catering, site office accommodation rentals, heavy equipment leasing, general site labor supply, and janitorial services to keep construction sites functional and safe."
  },
  {
    id: "mining",
    title: "Mining",
    iconName: "Pickaxe",
    description: "Managing remote camp operations, providing bulk wholesale supply deliveries, camp security/cleaning routines, and transportation logistics for workers in remote mining sites across Ghana."
  },
  {
    id: "hospitality",
    title: "Hospitality",
    iconName: "UtensilsCrossed",
    description: "Partnering with hotels, guest lodgings, and corporate offices to offer top-tier catering, professional janitorial and laundry management, and camp facilities setup."
  },
  {
    id: "marine-offshore",
    title: "Marine, Port, and Offshore Operations",
    iconName: "Anchor",
    description: "Strategically located in Takoradi to coordinate port-side logistics, offshore vessel catering, supply runs, and maritime labor support for vessels operating in Ghanaian waters."
  },
  {
    id: "logistics-industrial",
    title: "Logistics and Industrial Operations",
    iconName: "Activity",
    description: "Enhancing industrial operations with warehouse management support, supply chain sourcing, staff transportation, and pest control/fumigation services."
  }
];

export const coreValues = [
  {
    title: "Reliability",
    description: "We deliver dependable support when and where clients need it. 'Reliability at hand' is our promise."
  },
  {
    title: "Professionalism",
    description: "We operate with strict discipline, respect, and high standard operating procedures."
  },
  {
    title: "Safety",
    description: "We value safe, healthy practices and zero harm across all operations and service sectors."
  },
  {
    title: "Efficiency",
    description: "We help clients save time, optimize costs, and keep critical project operations moving."
  },
  {
    title: "Responsiveness",
    description: "We respond quickly to sudden project changes, client needs, and emergency requirements."
  },
  {
    title: "Quality Service",
    description: "We provide consistent, practical, and client-centric solutions that exceed expectations."
  }
];

export const whyChooseUs = [
  {
    title: "Wide Range of Services",
    description: "We offer an integrated 'one-stop' support model, allowing clients to handle catering, transport, safety, and manpower through a single reliable vendor instead of multiple complex channels."
  },
  {
    title: "Industrial Experience",
    description: "Our team has deep practical knowledge in highly demanding, safety-critical sectors like Oil & Gas, Mining, and heavy Construction."
  },
  {
    title: "Remote & Field Support Capability",
    description: "We are equipped to set up and manage operations in remote onshore regions, deep forests, and offshore marine vessels with complete self-sufficiency."
  },
  {
    title: "Professional & Dedicated Team",
    description: "Our crew includes experienced industrial chefs, safety advisors, logistics experts, and camp administrators who take pride in service excellence."
  },
  {
    title: "Strategic Takoradi Positioning",
    description: "Being based in Takoradi puts us at the gateway of Ghana's industrial boom, offshore oilfields, and busy ports for immediate responsiveness."
  },
  {
    title: "Reliability-Focused Brand",
    description: "Our entire culture, operations, and tagline ('Reliability at hand') are aligned to ensure we never let our partners down."
  }
];
