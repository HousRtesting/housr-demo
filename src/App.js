import React, { useState, useEffect } from 'react';
import { Heart, X, MapPin, Home, DollarSign, Maximize, Bed, Bath, Star, Filter, MessageCircle, ChevronLeft, ChevronRight, Zap, Camera, Upload, Plus, Trash2, RotateCcw, Check, TrendingUp, Key, Building2, Users } from 'lucide-react';

// Mock real estate data
const generateProperties = () => [
  {
    id: 1,
    type: 'sale',
    address: "Luxury Apartment",
    location: "Brussels, Ixelles",
    region: "Brussels",
    price: 450000,
    rent: null,
    size: 120,
    bedrooms: 3,
    bathrooms: 2,
    kitchen: "Fully equipped",
    epc: "A",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&auto=format&q=80"
    ],
    description: "Modern apartment in the heart of Brussels with stunning city views and premium finishes"
  },
  {
    id: 2,
    type: 'sale',
    address: "Family Villa",
    location: "Antwerp, Wilrijk",
    region: "Antwerp",
    price: 680000,
    rent: null,
    size: 200,
    bedrooms: 4,
    bathrooms: 3,
    kitchen: "Modern open kitchen",
    epc: "B",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop&auto=format&q=80"
    ],
    description: "Beautiful villa with private garden in quiet neighborhood"
  },
  {
    id: 3,
    type: 'rent',
    address: "Urban Loft",
    location: "Ghent, City Center",
    region: "Ghent",
    price: null,
    rent: 1200,
    size: 85,
    bedrooms: 2,
    bathrooms: 1,
    kitchen: "Industrial style",
    epc: "C",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=1200&h=800&fit=crop&auto=format&q=80"
    ],
    description: "Industrial loft with high ceilings and exposed brick"
  },
  {
    id: 4,
    type: 'sale',
    address: "Family Home",
    location: "Leuven, Heverlee",
    region: "Leuven",
    price: 520000,
    rent: null,
    size: 180,
    bedrooms: 4,
    bathrooms: 2,
    kitchen: "Renovated kitchen",
    epc: "A",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&h=800&fit=crop&auto=format&q=80"
    ],
    description: "Spacious family home near schools and parks"
  },
  {
    id: 5,
    type: 'rent',
    address: "Modern Studio",
    location: "Brussels, European Quarter",
    region: "Brussels",
    price: null,
    rent: 950,
    size: 55,
    bedrooms: 1,
    bathrooms: 1,
    kitchen: "Kitchenette",
    epc: "B",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1600566753229-0316f48c9733?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&h=800&fit=crop&auto=format&q=80"
    ],
    description: "Cozy studio perfect for young professionals"
  },
  {
    id: 6,
    type: 'sale',
    address: "Exclusive Penthouse",
    location: "Brussels, Uccle",
    region: "Brussels",
    price: 890000,
    rent: null,
    size: 160,
    bedrooms: 3,
    bathrooms: 3,
    kitchen: "Luxury kitchen",
    epc: "A+",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1200&h=800&fit=crop&auto=format&q=80"
    ],
    description: "Penthouse with rooftop terrace and panoramic views"
  },
  {
    id: 7,
    type: 'rent',
    address: "Canal Apartment",
    location: "Bruges, Historic Center",
    region: "Bruges",
    price: null,
    rent: 1100,
    size: 75,
    bedrooms: 2,
    bathrooms: 1,
    kitchen: "Equipped kitchen",
    epc: "C",
    images: [
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&h=800&fit=crop&auto=format&q=80"
    ],
    description: "Charming apartment with canal views"
  },
  {
    id: 8,
    type: 'sale',
    address: "Classic Townhouse",
    location: "Ghent, Patershol",
    region: "Ghent",
    price: 550000,
    rent: null,
    size: 145,
    bedrooms: 3,
    bathrooms: 2,
    kitchen: "Modern classic",
    epc: "B",
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=1200&h=800&fit=crop&auto=format&q=80"
    ],
    description: "Townhouse with original features in historic district"
  }
];

const App = () => {
  const [userRole, setUserRole] = useState(null);
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [properties, setProperties] = useState(generateProperties());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [passedProperties, setPassedProperties] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [contactProperty, setContactProperty] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [superLikeProperty, setSuperLikeProperty] = useState(null);
  const [reservedProperties, setReservedProperties] = useState([]);
  
  const [listingStep, setListingStep] = useState(0);
  const [newListing, setNewListing] = useState({
    images: [],
    bedrooms: 1,
    bathrooms: 1,
    kitchen: '',
    size: '',
    price: '',
    rent: '',
    location: '',
    address: '',
    description: '',
    region: 'Brussels',
    epc: 'B'
  });
  
  const [preferences, setPreferences] = useState({
    minPrice: 0,
    maxPrice: 2000000,
    epc: [],
    region: 'All',
    minSize: 0,
    minRent: 0,
    maxRent: 3000
  });

  const regions = ['All', 'Brussels', 'Antwerp', 'Ghent', 'Leuven', 'Bruges'];
  const epcRatings = ['A+', 'A', 'B', 'C', 'D', 'E', 'F'];

  const filteredProperties = properties.filter(p => {
    if (userRole === 'buyer' && p.type !== 'sale') return false;
    if (userRole === 'tenant' && p.type !== 'rent') return false;
    
    if (userRole === 'buyer') {
      const matchesPrice = p.price >= preferences.minPrice && p.price <= preferences.maxPrice;
      const matchesEpc = preferences.epc.length === 0 || preferences.epc.includes(p.epc);
      const matchesRegion = preferences.region === 'All' || p.region === preferences.region;
      const matchesSize = p.size >= preferences.minSize;
      const notPassed = !passedProperties.includes(p.id);
      return matchesPrice && matchesEpc && matchesRegion && matchesSize && notPassed;
    }
    
    if (userRole === 'tenant') {
      const matchesRent = p.rent >= preferences.minRent && p.rent <= preferences.maxRent;
      const matchesRegion = preferences.region === 'All' || p.region === preferences.region;
      const notPassed = !passedProperties.includes(p.id);
      return matchesRent && matchesRegion && notPassed;
    }
    
    return true;
  });

  const currentProperty = filteredProperties[currentIndex];

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [currentIndex]);

  const handleSwipe = (liked) => {
    if (!currentProperty) return;
    setSwipeDirection(liked ? 'right' : 'left');
    if (liked) {
      setFavorites([...favorites, currentProperty]);
    } else {
      setPassedProperties([...passedProperties, currentProperty.id]);
    }
    setTimeout(() => {
      setSwipeDirection(null);
      setCurrentIndex((prev) => prev + 1);
    }, 300);
  };

  const handleSuperLike = () => {
    if (!currentProperty) return;
    setSuperLikeProperty(currentProperty);
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = () => {
    if (superLikeProperty) {
      setReservedProperties([...reservedProperties, {
        ...superLikeProperty,
        reservedUntil: new Date(Date.now() + 48 * 60 * 60 * 1000)
      }]);
      setFavorites([...favorites, superLikeProperty]);
      setShowPaymentModal(false);
      setSuperLikeProperty(null);
      alert('Property reserved for 48 hours!');
      handleSwipe(true);
    }
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (currentProperty && currentImageIndex < currentProperty.images.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setNewListing({...newListing, images: [...newListing.images, ...imageUrls]});
  };

  const removeImage = (index) => {
    setNewListing({...newListing, images: newListing.images.filter((_, i) => i !== index)});
  };

  const completeListing = () => {
    const listing = {
      id: properties.length + 1,
      type: userRole === 'seller' ? 'sale' : 'rent',
      address: newListing.address,
      location: newListing.location,
      region: newListing.region,
      price: userRole === 'seller' ? parseInt(newListing.price) : null,
      rent: userRole === 'landlord' ? parseInt(newListing.rent) : null,
      size: parseInt(newListing.size),
      bedrooms: newListing.bedrooms,
      bathrooms: newListing.bathrooms,
      kitchen: newListing.kitchen,
      epc: newListing.epc,
      images: newListing.images.length > 0 ? newListing.images : ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop&auto=format&q=80"],
      description: newListing.description
    };
    setProperties([...properties, listing]);
    alert('Listing published!');
    setListingStep(0);
    setNewListing({
      images: [], bedrooms: 1, bathrooms: 1, kitchen: '', size: '', price: '', rent: '',
      location: '', address: '', description: '', region: 'Brussels', epc: 'B'
    });
  };

  // Role Selection
  if (userRole === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-white mb-4">HousR</h1>
            <p className="text-blue-100 text-xl">Find or list your property</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <button onClick={() => setUserRole('buyer')} className="bg-white text-blue-600 rounded-2xl p-8 hover:bg-blue-50 transition-all shadow-xl flex flex-col items-center">
              <TrendingUp size={48} className="mb-4" />
              <h2 className="text-2xl font-bold mb-2">Buyer</h2>
              <p className="text-gray-600 text-sm">Buy property</p>
            </button>
            
            <button onClick={() => setUserRole('tenant')} className="bg-white text-blue-600 rounded-2xl p-8 hover:bg-blue-50 transition-all shadow-xl flex flex-col items-center">
              <Key size={48} className="mb-4" />
              <h2 className="text-2xl font-bold mb-2">Tenant</h2>
              <p className="text-gray-600 text-sm">Rent property</p>
            </button>
            
            <button onClick={() => { setUserRole('seller'); setOnboardingComplete(true); }} className="bg-white text-blue-600 rounded-2xl p-8 hover:bg-blue-50 transition-all shadow-xl flex flex-col items-center">
              <Building2 size={48} className="mb-4" />
              <h2 className="text-2xl font-bold mb-2">Seller</h2>
              <p className="text-gray-600 text-sm">List for sale</p>
            </button>
            
            <button onClick={() => { setUserRole('landlord'); setOnboardingComplete(true); }} className="bg-white text-blue-600 rounded-2xl p-8 hover:bg-blue-50 transition-all shadow-xl flex flex-col items-center">
              <Users size={48} className="mb-4" />
              <h2 className="text-2xl font-bold mb-2">Landlord</h2>
              <p className="text-gray-600 text-sm">List for rent</p>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Buyer Onboarding
  if (userRole === 'buyer' && !onboardingComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-2 text-blue-900">Your Preferences</h2>
          <p className="text-gray-600 mb-6">Find your perfect home</p>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price: €{preferences.minPrice.toLocaleString()} - €{preferences.maxPrice.toLocaleString()}
              </label>
              <div className="space-y-2">
                <input type="range" min="0" max="2000000" step="50000" value={preferences.minPrice} onChange={(e) => setPreferences({...preferences, minPrice: parseInt(e.target.value)})} className="w-full accent-blue-600" />
                <input type="range" min="0" max="2000000" step="50000" value={preferences.maxPrice} onChange={(e) => setPreferences({...preferences, maxPrice: parseInt(e.target.value)})} className="w-full accent-blue-600" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Energy (EPC)</label>
              <div className="flex flex-wrap gap-2">
                {epcRatings.map(rating => (
                  <button
                    key={rating}
                    onClick={() => {
                      const newEpc = preferences.epc.includes(rating)
                        ? preferences.epc.filter(r => r !== rating)
                        : [...preferences.epc, rating];
                      setPreferences({...preferences, epc: newEpc});
                    }}
                    className={`px-4 py-2 rounded-full font-semibold ${
                      preferences.epc.includes(rating) ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {rating}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
              <select value={preferences.region} onChange={(e) => setPreferences({...preferences, region: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                {regions.map(region => <option key={region} value={region}>{region}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Min Size: {preferences.minSize}m²
              </label>
              <input type="range" min="0" max="500" step="10" value={preferences.minSize} onChange={(e) => setPreferences({...preferences, minSize: parseInt(e.target.value)})} className="w-full accent-blue-600" />
            </div>
          </div>

          <button onClick={() => setOnboardingComplete(true)} className="w-full mt-8 py-3 rounded-full font-semibold bg-blue-600 text-white hover:bg-blue-700">
            Start Browsing
          </button>
        </div>
      </div>
    );
  }

  // Tenant Onboarding
  if (userRole === 'tenant' && !onboardingComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-2 text-blue-900">Your Preferences</h2>
          <p className="text-gray-600 mb-6">Find your rental</p>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Rent: €{preferences.minRent} - €{preferences.maxRent}
              </label>
              <div className="space-y-2">
                <input type="range" min="0" max="3000" step="50" value={preferences.minRent} onChange={(e) => setPreferences({...preferences, minRent: parseInt(e.target.value)})} className="w-full accent-blue-600" />
                <input type="range" min="0" max="3000" step="50" value={preferences.maxRent} onChange={(e) => setPreferences({...preferences, maxRent: parseInt(e.target.value)})} className="w-full accent-blue-600" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
              <select value={preferences.region} onChange={(e) => setPreferences({...preferences, region: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                {regions.map(region => <option key={region} value={region}>{region}</option>)}
              </select>
            </div>
          </div>

          <button onClick={() => setOnboardingComplete(true)} className="w-full mt-8 py-3 rounded-full font-semibold bg-blue-600 text-white hover:bg-blue-700">
            Start Browsing
          </button>
        </div>
      </div>
    );
  }

  // Seller/Landlord Flow
  if ((userRole === 'seller' || userRole === 'landlord') && onboardingComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="bg-white shadow-sm">
          <div className="max-w-2xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">HousR</h1>
            <button onClick={() => setUserRole(null)} className="text-sm text-gray-600 hover:text-gray-800">Switch Role</button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="flex justify-between mb-8">
            {['Photos', 'Price', 'Details', 'Publish'].map((step, idx) => (
              <div key={idx} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm ${
                  idx <= listingStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {idx < listingStep ? <Check size={18} /> : idx + 1}
                </div>
                {idx < 3 && <div className={`w-12 h-1 ${idx < listingStep ? 'bg-blue-600' : 'bg-gray-200'}`}></div>}
              </div>
            ))}
          </div>

          {listingStep === 0 && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Photos</h2>
              <p className="text-gray-600 mb-6">Add at least one</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {newListing.images.map((img, idx) => (
                  <div key={idx} className="relative aspect-video rounded-lg overflow-hidden">
                    <img src={img} alt="" className="w-full h-full object-cover" />
                    <button onClick={() => removeImage(idx)} className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full">
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
                {newListing.images.length < 8 && (
                  <label className="aspect-video border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-500">
                    <Camera size={32} className="text-gray-400 mb-2" />
                    <span className="text-sm text-gray-600">Add</span>
                    <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="hidden" />
                  </label>
                )}
              </div>
              
              <button onClick={() => setListingStep(1)} disabled={newListing.images.length < 1} className={`w-full py-3 rounded-full font-semibold ${
                newListing.images.length < 1 ? 'bg-gray-200 text-gray-400' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                Continue
              </button>
            </div>
          )}

          {listingStep === 1 && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Price & Location</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {userRole === 'seller' ? 'Sale Price (€)' : 'Monthly Rent (€)'}
                  </label>
                  <input
                    type="number"
                    placeholder={userRole === 'seller' ? '450000' : '1200'}
                    value={userRole === 'seller' ? newListing.price : newListing.rent}
                    onChange={(e) => userRole === 'seller' 
                      ? setNewListing({...newListing, price: e.target.value})
                      : setNewListing({...newListing, rent: e.target.value})
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
                  <select value={newListing.region} onChange={(e) => setNewListing({...newListing, region: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {regions.filter(r => r !== 'All').map(region => <option key={region} value={region}>{region}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <input type="text" placeholder="Brussels, Ixelles" value={newListing.location} onChange={(e) => setNewListing({...newListing, location: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button onClick={() => setListingStep(0)} className="flex-1 py-3 rounded-full font-semibold bg-gray-200 text-gray-700">Back</button>
                <button
                  onClick={() => setListingStep(2)}
                  disabled={!(userRole === 'seller' ? newListing.price : newListing.rent) || !newListing.location}
                  className={`flex-1 py-3 rounded-full font-semibold ${
                    !(userRole === 'seller' ? newListing.price : newListing.rent) || !newListing.location
                      ? 'bg-gray-200 text-gray-400'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {listingStep === 2 && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Details</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                    <input type="number" min="1" value={newListing.bedrooms} onChange={(e) => setNewListing({...newListing, bedrooms: parseInt(e.target.value)})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
                    <input type="number" min="1" value={newListing.bathrooms} onChange={(e) => setNewListing({...newListing, bathrooms: parseInt(e.target.value)})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Square Meters</label>
                  <input type="number" placeholder="120" value={newListing.size} onChange={(e) => setNewListing({...newListing, size: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Kitchen</label>
                  <input type="text" placeholder="Fully equipped" value={newListing.kitchen} onChange={(e) => setNewListing({...newListing, kitchen: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Name</label>
                  <input type="text" placeholder="Luxury Apartment" value={newListing.address} onChange={(e) => setNewListing({...newListing, address: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea placeholder="Describe your property" value={newListing.description} onChange={(e) => setNewListing({...newListing, description: e.target.value})} rows="3" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button onClick={() => setListingStep(1)} className="flex-1 py-3 rounded-full font-semibold bg-gray-200 text-gray-700">Back</button>
                <button
                  onClick={() => setListingStep(3)}
                  disabled={!newListing.size || !newListing.kitchen || !newListing.address || !newListing.description}
                  className={`flex-1 py-3 rounded-full font-semibold ${
                    !newListing.size || !newListing.kitchen || !newListing.address || !newListing.description
                      ? 'bg-gray-200 text-gray-400'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Review
                </button>
              </div>
            </div>
          )}

          {listingStep === 3 && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Review</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {newListing.images.slice(0, 4).map((img, idx) => (
                    <img key={idx} src={img} alt="" className="w-full h-32 object-cover rounded-lg" />
                  ))}
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-bold text-xl mb-2">{newListing.address}</h3>
                  <p className="text-gray-600 mb-4">{newListing.location}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Bed size={18} className="text-blue-600" />
                      <span>{newListing.bedrooms} bed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath size={18} className="text-blue-600" />
                      <span>{newListing.bathrooms} bath</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Maximize size={18} className="text-blue-600" />
                      <span>{newListing.size}m²</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Home size={18} className="text-blue-600" />
                      <span>{newListing.kitchen}</span>
                    </div>
                  </div>

                  <p className="text-2xl font-bold text-blue-600 mb-4">
                    {userRole === 'seller' 
                      ? `€${parseInt(newListing.price).toLocaleString()}`
                      : `€${parseInt(newListing.rent).toLocaleString()}/mo`
                    }
                  </p>
                  <p className="text-gray-700">{newListing.description}</p>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button onClick={() => setListingStep(2)} className="flex-1 py-3 rounded-full font-semibold bg-gray-200 text-gray-700">Back</button>
                <button onClick={completeListing} className="flex-1 py-3 rounded-full font-semibold bg-blue-600 text-white hover:bg-blue-700">
                  Publish
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Payment Modal
  if (showPaymentModal) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Super Like</h2>
            <p className="text-gray-600">Reserve for 48 hours</p>
          </div>

          {superLikeProperty && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <img src={superLikeProperty.images[0]} alt="" className="w-full h-32 object-cover rounded-lg mb-3" />
              <h3 className="font-bold">{superLikeProperty.address}</h3>
            </div>
          )}

          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between">
              <span>Fee</span>
              <span className="font-bold">€29.99</span>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <input type="text" placeholder="Card Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
              <input type="text" placeholder="CVV" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
            </div>
          </div>

          <div className="flex gap-3">
            <button onClick={() => { setShowPaymentModal(false); setSuperLikeProperty(null); }} className="flex-1 py-3 rounded-full font-semibold bg-gray-200 text-gray-700">
              Cancel
            </button>
            <button onClick={handlePaymentSuccess} className="flex-1 py-3 rounded-full font-semibold bg-blue-600 text-white hover:bg-blue-700">
              Pay €29.99
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Favorites
  if (showFavorites) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">HousR</h1>
            <button onClick={() => setShowFavorites(false)} className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              Back
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-4">
          <h2 className="text-3xl font-bold mb-6">Favorites</h2>
          {favorites.length === 0 ? (
            <div className="text-center py-20">
              <Heart size={64} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-xl">No favorites yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {favorites.map(p => (
                <div key={p.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {reservedProperties.some(rp => rp.id === p.id) && (
                    <div className="bg-yellow-400 text-center py-2 font-bold flex items-center justify-center gap-2">
                      <Zap size={20} />Reserved 48h
                    </div>
                  )}
                  <img src={p.images[0]} alt="" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-bold text-xl mb-2">{p.address}</h3>
                    <div className="flex items-center gap-2 mb-3 text-gray-600 text-sm">
                      <MapPin size={16} />
                      <span>{p.location}</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-600 mb-3">
                      {p.type === 'sale' ? `€${p.price.toLocaleString()}` : `€${p.rent}/mo`}
                    </p>
                    <div className="flex gap-2">
                      <button onClick={() => setContactProperty(p)} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                        <MessageCircle size={18} />Contact
                      </button>
                      <button onClick={() => setFavorites(favorites.filter(f => f.id !== p.id))} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Contact
  if (contactProperty) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <div className="mb-6">
            <img src={contactProperty.images[0]} alt="" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="font-bold text-xl">{contactProperty.address}</h3>
            <p className="text-gray-600">{contactProperty.location}</p>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            <input type="tel" placeholder="Phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            <textarea placeholder="Message" className="w-full px-4 py-2 border border-gray-300 rounded-lg h-24"></textarea>
            <div className="flex gap-2">
              <button type="button" onClick={() => setContactProperty(null)} className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-full">Cancel</button>
              <button type="submit" onClick={(e) => { e.preventDefault(); alert('Sent!'); setContactProperty(null); }} className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-full">Send</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Edit Filters
  if (showFilters) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6">Filters</h2>
          <div className="space-y-6">
            {userRole === 'buyer' && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Price: €{preferences.minPrice.toLocaleString()} - €{preferences.maxPrice.toLocaleString()}
                  </label>
                  <input type="range" min="0" max="2000000" step="50000" value={preferences.minPrice} onChange={(e) => setPreferences({...preferences, minPrice: parseInt(e.target.value)})} className="w-full accent-blue-600 mb-2" />
                  <input type="range" min="0" max="2000000" step="50000" value={preferences.maxPrice} onChange={(e) => setPreferences({...preferences, maxPrice: parseInt(e.target.value)})} className="w-full accent-blue-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">EPC</label>
                  <div className="flex flex-wrap gap-2">
                    {epcRatings.map(r => (
                      <button key={r} onClick={() => {
                        const newEpc = preferences.epc.includes(r) ? preferences.epc.filter(e => e !== r) : [...preferences.epc, r];
                        setPreferences({...preferences, epc: newEpc});
                      }} className={`px-3 py-1 rounded-full text-sm font-semibold ${preferences.epc.includes(r) ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                        {r}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Min Size: {preferences.minSize}m²</label>
                  <input type="range" min="0" max="500" step="10" value={preferences.minSize} onChange={(e) => setPreferences({...preferences, minSize: parseInt(e.target.value)})} className="w-full accent-blue-600" />
                </div>
              </>
            )}
            {userRole === 'tenant' && (
              <div>
                <label className="block text-sm font-medium mb-2">Rent: €{preferences.minRent} - €{preferences.maxRent}</label>
                <input type="range" min="0" max="3000" step="50" value={preferences.minRent} onChange={(e) => setPreferences({...preferences, minRent: parseInt(e.target.value)})} className="w-full accent-blue-600 mb-2" />
                <input type="range" min="0" max="3000" step="50" value={preferences.maxRent} onChange={(e) => setPreferences({...preferences, maxRent: parseInt(e.target.value)})} className="w-full accent-blue-600" />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium mb-2">Region</label>
              <select value={preferences.region} onChange={(e) => setPreferences({...preferences, region: e.target.value})} className="w-full px-4 py-2 border rounded-lg">
                {regions.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
          </div>
          <div className="flex gap-2 mt-6">
            <button onClick={() => setShowFilters(false)} className="flex-1 py-3 rounded-full bg-gray-200 text-gray-700">Cancel</button>
            <button onClick={() => { setCurrentIndex(0); setShowFilters(false); }} className="flex-1 py-3 rounded-full bg-blue-600 text-white">Apply</button>
          </div>
        </div>
      </div>
    );
  }

  // Main Swipe
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">HousR</h1>
          <div className="flex gap-2">
            <button onClick={() => setShowFilters(true)} className="p-2 rounded-full hover:bg-blue-50">
              <Filter size={24} className="text-blue-600" />
            </button>
            <button onClick={() => setShowFavorites(true)} className="p-2 rounded-full hover:bg-blue-50 relative">
              <Star size={24} className="text-blue-600" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{favorites.length}</span>
              )}
            </button>
            <button onClick={() => setUserRole(null)} className="p-2 rounded-full hover:bg-blue-50">
              <Home size={24} className="text-blue-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-8">
        {currentIndex >= filteredProperties.length ? (
          <div className="text-center py-20">
            <Home size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold mb-2">No more properties</h2>
            <button onClick={() => { setCurrentIndex(0); setPassedProperties([]); }} className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 flex items-center gap-2 mx-auto">
              <RotateCcw size={20} />Reset
            </button>
          </div>
        ) : (
          <div>
            <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden transition-transform duration-300 ${
              swipeDirection === 'right' ? 'transform translate-x-96 rotate-12 opacity-0' :
              swipeDirection === 'left' ? 'transform -translate-x-96 -rotate-12 opacity-0' : ''
            }`}>
              <div className="relative">
                <img src={currentProperty.images[currentImageIndex]} alt="" className="w-full h-96 object-cover" crossOrigin="anonymous" />
                {currentProperty.images.length > 1 && (
                  <>
                    <button onClick={prevImage} disabled={currentImageIndex === 0} className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-lg ${currentImageIndex === 0 ? 'opacity-50' : ''}`}>
                      <ChevronLeft size={24} className="text-blue-600" />
                    </button>
                    <button onClick={nextImage} disabled={currentImageIndex === currentProperty.images.length - 1} className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-lg ${currentImageIndex === currentProperty.images.length - 1 ? 'opacity-50' : ''}`}>
                      <ChevronRight size={24} className="text-blue-600" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {currentProperty.images.map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full ${i === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'}`} />
                      ))}
                    </div>
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">{currentProperty.address}</h2>
                  <div className="flex items-center gap-2">
                    <MapPin size={20} />
                    <span>{currentProperty.location}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">{currentProperty.description}</p>
                <div className="flex gap-4 mb-4 flex-wrap text-sm">
                  <div className="flex items-center gap-2"><Bed size={18} />{currentProperty.bedrooms} bed</div>
                  <div className="flex items-center gap-2"><Bath size={18} />{currentProperty.bathrooms} bath</div>
                  <div className="flex items-center gap-2"><Maximize size={18} />{currentProperty.size}m²</div>
                  {currentProperty.epc && <div className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">EPC {currentProperty.epc}</div>}
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-6">
                  {currentProperty.type === 'sale' ? `€${currentProperty.price.toLocaleString()}` : `€${currentProperty.rent}/mo`}
                </div>
                <div className="flex justify-center gap-4">
                  <button onClick={() => handleSwipe(false)} className="w-16 h-16 rounded-full bg-white border-4 border-red-500 flex items-center justify-center hover:bg-red-50 shadow-lg">
                    <X size={32} className="text-red-500" />
                  </button>
                  <button onClick={handleSuperLike} className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 border-4 border-yellow-300 flex items-center justify-center shadow-lg">
                    <Zap size={32} className="text-white" fill="white" />
                  </button>
                  <button onClick={() => handleSwipe(true)} className="w-16 h-16 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center hover:bg-blue-50 shadow-lg">
                    <Heart size={32} className="text-blue-600" />
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center mt-4 text-gray-500">{currentIndex + 1} / {filteredProperties.length}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
