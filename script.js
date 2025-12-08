// Data
const PROPERTIES = [
  {
    id: '1',
    title: 'Modern Downtown Loft',
    price: '85 Lakhs',
    location: 'Bangalore, India',
    type: 'Apartment',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    description: 'A stunning open-concept loft located in the heart of the city. Features floor-to-ceiling windows, exposed brick, and a rooftop terrace access.',
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Rooftop Access', 'Gym', 'Concierge', 'Pet Friendly']
  },
  {
    id: '2',
    title: 'Seaside Family Villa',
    price: '1.5 Crores',
    location: 'Goa, India',
    type: 'Villa',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4500,
    description: 'Experience luxury living with this oceanfront villa. Private beach access, infinity pool, and a sprawling garden make this the perfect getaway home.',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Ocean View', 'Infinity Pool', 'Private Beach', 'Smart Home System']
  },
  {
    id: '3',
    title: 'Suburban Dream House',
    price: '65 Lakhs',
    location: 'Ahmedabad, India',
    type: 'House',
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2100,
    description: 'Perfect for families, this charming house offers a large backyard, modern kitchen, and is located in a top-rated school district.',
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Large Backyard', 'Garage', 'Fireplace', 'Newly Renovated']
  },
  {
    id: '4',
    title: 'Skyline Penthouse',
    price: '4.0 Crores',
    location: 'Karnataka, India',
    type: 'Penthouse',
    bedrooms: 4,
    bathrooms: 4,
    sqft: 3200,
    description: 'The pinnacle of luxury. This penthouse offers 360-degree views of the skyline, a private elevator, and bespoke interior design.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Panoramic Views', 'Private Elevator', 'Wine Cellar', 'Spa']
  },
  {
    id: '5',
    title: 'Cozy Garden Cottage',
    price: '45 Lakhs',
    location: 'Kerala, India',
    type: 'House',
    bedrooms: 2,
    bathrooms: 1,
    sqft: 950,
    description: 'A fairytale cottage surrounded by lush greenery. Ideal for artists or couples looking for a quiet retreat within the city limits.',
    imageUrl: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Garden', 'Wood Stove', 'Skylights', 'Historic Charm']
  },
  {
    id: '6',
    title: 'Tech Hub Apartment',
    price: '90 Lakhs',
    location: 'Hyderabad, India',
    type: 'Apartment',
    bedrooms: 1,
    bathrooms: 1,
    sqft: 800,
    description: 'Located minutes from major tech campuses. Ultra-modern amenities, coworking spaces in the building, and high-speed fiber internet.',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Coworking Space', 'Fiber Internet', 'EV Charging', 'Fitness Center']
  },
  {
    id: '7',
    title: 'Urban Sky Villa',
    price: '8.5 Crores',
    location: 'Mumbai, India',
    type: 'Penthouse',
    bedrooms: 4,
    bathrooms: 5,
    sqft: 4200,
    description: 'A masterpiece in the sky. This duplex penthouse features a private lap pool, home theater, and floor-to-ceiling glass walls overlooking the Arabian Sea.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Sea View', 'Private Pool', 'Home Theater', 'Staff Quarters']
  },
  {
    id: '8',
    title: 'Colonial Heritage Estate',
    price: '3.2 Crores',
    location: 'Kolkata, India',
    type: 'Estate',
    bedrooms: 6,
    bathrooms: 5,
    sqft: 5500,
    description: 'Step back in time with this impeccably restored colonial mansion. High ceilings, teakwood flooring, and a wrap-around veranda define its timeless elegance.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrpAFNUNaSYMfi0gAsC0qv0GxzF4p6J1LFWA&s',
    features: ['Heritage Site', 'Veranda', 'Library', 'Lush Gardens']
  },
  {
    id: '9',
    title: 'Misty Hill Retreat',
    price: '1.8 Crores',
    location: 'Ooty, India',
    type: 'Cottage',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 1800,
    description: 'Nestled amidst tea plantations, this stone cottage offers serene views of the Nilgiris. Perfect for those seeking peace, cool weather, and fresh mountain air.',
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Mountain View', 'Tea Estate', 'Fireplace', 'Private Driveway']
  },
  {
    id: '10',
    title: 'Smart Eco-Home',
    price: '1.2 Crores',
    location: 'Pune, India',
    type: 'Apartment',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 1600,
    description: 'Live sustainably without compromising on luxury. This IGBC Platinum rated home features solar power, rain harvesting, and AI-driven climate control.',
    imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Solar Power', 'AI Automation', 'Air Purification', 'Vertical Garden']
  },
  {
    id: '11',
    title: 'Coastal Zen Villa',
    price: '5.5 Crores',
    location: 'Alibaug, India',
    type: 'Villa',
    bedrooms: 5,
    bathrooms: 6,
    sqft: 6000,
    description: 'A minimalist masterpiece designed for relaxation. Open architecture blurs the lines between indoors and outdoors, featuring a central courtyard and zen garden.',
    imageUrl: 'https://www.jamesedition.com/stories/wp-content/uploads/2024/08/The-Agency-Marbella-1.webp',
    features: ['Zen Garden', 'Private Jetty', 'Open Air Bath', 'Meditation Room']
  },
  {
    id: '12',
    title: 'Royal Farmhouse',
    price: '6.0 Crores',
    location: 'Delhi NCR, India',
    type: 'Farmhouse',
    bedrooms: 5,
    bathrooms: 5,
    sqft: 7500,
    description: 'Escape the city chaos to this sprawling farmhouse. Spread across 2 acres, it includes a swimming pool, organic vegetable patch, and stables.',
    imageUrl: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['2 Acres Land', 'Swimming Pool', 'Stables', 'Organic Farm']
  }
];

const PARTNERS = [
  {
    name: 'BuildRight Construction',
    description: 'Premium construction quality assurance ensuring your home lasts for generations.',
    iconName: 'hard-hat',
    colorClass: 'text-amber-500'
  },
  {
    name: 'GreenLeaf Landscapes',
    description: 'Award-winning landscape architecture transforming outdoor spaces into sanctuaries.',
    iconName: 'trees',
    colorClass: 'text-green-500'
  },
  {
    name: 'SafeGuard Security',
    description: '24/7 Home security solutions including smart monitoring and rapid response teams.',
    iconName: 'shield',
    colorClass: 'text-indigo-500'
  },
  {
    name: 'Prime Mortgages',
    description: 'Exclusive financing rates for our clients with flexible repayment options.',
    iconName: 'landmark',
    colorClass: 'text-blue-500'
  },
  {
      name: 'Interior Magic',
      description: 'World-class interior designers ready to customize your new home.',
      iconName: 'pen-tool',
      colorClass: 'text-purple-500'
    },
    {
      name: 'EcoEnergy Solutions',
      description: 'Solar and renewable energy installations for a sustainable future.',
      iconName: 'zap',
      colorClass: 'text-yellow-500'
    }
];

// Initialize Icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    // Only apply scroll effect on home page where navbar starts transparent
    if (document.title.includes('Home')) {
        window.addEventListener('scroll', () => {
            const logoText = navbar.querySelector('span');
            const logoIcon = navbar.querySelector('[data-lucide="home"]');
            const links = navbar.querySelectorAll('a.font-medium');
            const menuBtn = navbar.querySelector('button');

            if (window.scrollY > 20) {
                navbar.classList.add('bg-white', 'shadow-md', 'py-2');
                navbar.classList.remove('bg-transparent', 'py-4', 'text-white');
                navbar.classList.add('text-slate-900');
                
                // Update links color
                links.forEach(link => {
                   if (!link.classList.contains('text-amber-500')) {
                       link.classList.remove('text-white');
                       link.classList.add('text-slate-900');
                   }
                });

                if(logoIcon) logoIcon.classList.replace('text-current', 'text-indigo-600');
                if(menuBtn) menuBtn.classList.replace('text-white', 'text-slate-900');
            } else {
                navbar.classList.remove('bg-white', 'shadow-md', 'py-2', 'text-slate-900');
                navbar.classList.add('bg-transparent', 'py-4', 'text-white');
                
                links.forEach(link => {
                    if (!link.classList.contains('text-amber-500')) {
                        link.classList.add('text-white');
                        link.classList.remove('text-slate-900');
                    }
                });

                if(logoIcon) logoIcon.classList.replace('text-indigo-600', 'text-current');
                if(menuBtn) menuBtn.classList.replace('text-slate-900', 'text-white');
            }
        });
    }
});

// Mobile Menu Toggle
function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

// Render Properties
function renderProperties(containerId, isHome = false) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const displayProps = isHome ? PROPERTIES.slice(0, 3) : PROPERTIES;

    container.innerHTML = displayProps.map(p => `
        <div class="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full fade-in-up">
        <div class="relative overflow-hidden h-64">
            <img src="${p.imageUrl}" alt="${p.title}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">${p.type}</div>
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                <p class="text-white font-bold text-xl">${p.price}</p>
            </div>
        </div>
        <div class="p-6 flex-grow flex flex-col">
            <h3 class="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">${p.title}</h3>
            <div class="flex items-center text-slate-500 mb-4 text-sm">
            <i data-lucide="map-pin" class="h-4 w-4 mr-1 text-amber-500"></i>
            ${p.location}
            </div>
            <div class="grid grid-cols-3 gap-4 border-t border-slate-100 pt-4 mb-4">
            <div class="flex flex-col items-center text-center"><i data-lucide="bed" class="h-5 w-5 text-indigo-500 mb-1"></i><span class="text-xs text-slate-500">Beds</span><span class="font-semibold text-slate-800">${p.bedrooms}</span></div>
            <div class="flex flex-col items-center text-center border-l border-slate-100"><i data-lucide="bath" class="h-5 w-5 text-indigo-500 mb-1"></i><span class="text-xs text-slate-500">Baths</span><span class="font-semibold text-slate-800">${p.bathrooms}</span></div>
            <div class="flex flex-col items-center text-center border-l border-slate-100"><i data-lucide="maximize" class="h-5 w-5 text-indigo-500 mb-1"></i><span class="text-xs text-slate-500">Sqft</span><span class="font-semibold text-slate-800">${p.sqft}</span></div>
            </div>
            <button onclick="openModal('${p.id}')" class="w-full mt-auto bg-slate-50 text-slate-700 hover:bg-slate-900 hover:text-white py-2 rounded-lg font-medium transition-colors duration-200 cursor-pointer">View Details</button>
        </div>
        </div>
    `).join('');
    
    // Re-initialize icons for the newly injected HTML
    lucide.createIcons();
}

// Render Partners
function renderPartners(containerId, isLimited = false) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const displayPartners = isLimited ? PARTNERS.slice(0, 4) : PARTNERS;

    container.innerHTML = displayPartners.map(partner => `
        <div class="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-amber-500 transition-all duration-300 group hover:shadow-lg hover:shadow-amber-500/10 flex flex-col items-center text-center">
            <div class="mb-6 group-hover:scale-110 transition-transform duration-300 bg-slate-900 p-4 rounded-full">
            <i data-lucide="${partner.iconName}" class="h-12 w-12 ${partner.colorClass}"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">${partner.name}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">${partner.description}</p>
        </div>
    `).join('');
    lucide.createIcons();
}

// Modal Logic
function openModal(id) {
    const p = PROPERTIES.find(prop => prop.id === id);
    if (!p) return;
    
    const modal = document.getElementById('property-modal');
    const content = document.getElementById('modal-content');
    
    content.innerHTML = `
        <div class="h-64 md:h-full min-h-[400px]">
        <img src="${p.imageUrl}" alt="${p.title}" class="w-full h-full object-cover" />
        </div>
        <div class="p-8">
        <div class="flex justify-between items-start mb-4">
            <div>
            <span class="inline-block bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full font-bold uppercase tracking-wider mb-2">${p.type}</span>
            <h2 class="text-3xl font-bold text-slate-900">${p.title}</h2>
            <p class="text-slate-500 flex items-center mt-1">📍 ${p.location}</p>
            </div>
            <p class="text-2xl font-bold text-indigo-600">${p.price}</p>
        </div>
        <div class="flex space-x-6 py-6 border-b border-slate-100 mb-6">
            <div class="text-center"><p class="text-2xl font-bold text-slate-800">${p.bedrooms}</p><p class="text-xs text-slate-500 uppercase">Bedrooms</p></div>
            <div class="text-center"><p class="text-2xl font-bold text-slate-800">${p.bathrooms}</p><p class="text-xs text-slate-500 uppercase">Bathrooms</p></div>
            <div class="text-center"><p class="text-2xl font-bold text-slate-800">${p.sqft}</p><p class="text-xs text-slate-500 uppercase">Sq Ft</p></div>
        </div>
        <div class="mb-8">
            <h4 class="text-lg font-semibold text-slate-900 mb-2">Description</h4>
            <p class="text-slate-600 leading-relaxed">${p.description}</p>
        </div>
        <div class="mb-8">
            <h4 class="text-lg font-semibold text-slate-900 mb-2">Features</h4>
            <ul class="grid grid-cols-2 gap-2">
            ${p.features.map(f => `<li class="flex items-center text-slate-600 text-sm"><span class="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>${f}</li>`).join('')}
            </ul>
        </div>
        <a href="contact.html">
            <button class="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors cursor-pointer">Schedule a Viewing</button>
        </a>
        </div>
    `;

    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.remove('opacity-0'), 10);
    lucide.createIcons();
}

function closeModal(event) {
    if (event && !event.target.id.includes('property-modal')) return;
    const modal = document.getElementById('property-modal');
    modal.classList.add('opacity-0');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

// Form Handling
function handleFormSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Message Sent!';
    btn.classList.add('bg-green-600');
    btn.classList.remove('bg-slate-900');
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.classList.remove('bg-green-600');
        btn.classList.add('bg-slate-900');
        e.target.reset();
        // Re-add icon after reset if strictly needed, but innerHTML replace might have killed it
        lucide.createIcons(); 
    }, 3000);
}