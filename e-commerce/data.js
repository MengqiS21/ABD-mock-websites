/* ── data.js ── Shared product catalogue used by every page ── */

const products = [
    {
      id: 1,
      brand: 'MODERNIST',
      name: 'Wireless Noise-Canceling Headphones',
      price: 349.99,
      originalPrice: 449.99,
      rating: 4.8,
      reviews: 2847,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
      badge: 'Best Seller',
      discount: 22,
      category: 'Electronics',
      description: 'Experience immersive sound with industry-leading noise cancellation. These premium wireless headphones deliver crystal-clear audio with deep bass response and a comfortable over-ear design perfect for long listening sessions.',
      highlights: [
        'Active Noise Cancellation with adaptive transparency',
        '40-hour battery life with quick charge',
        'Hi-Res Audio certified — LDAC & aptX HD',
        'Memory-foam ear cushions with cooling gel',
        'Multipoint connection — pair two devices simultaneously'
      ],
      specs: {
        'Driver Size': '40mm custom dynamic',
        'Frequency Response': '4Hz – 40kHz',
        'Battery Life': '40 hours (ANC on)',
        'Charging': 'USB-C, 10 min = 3 hrs',
        'Weight': '254 g',
        'Bluetooth': '5.3 with multipoint',
        'Codec Support': 'LDAC, aptX HD, AAC, SBC'
      }
    },
    {
      id: 2,
      brand: 'LUMA',
      name: 'Smart Watch Series 7',
      price: 399.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 3621,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
      badge: 'New',
      discount: null,
      category: 'Electronics',
      description: 'The most advanced smartwatch yet. Featuring an always-on Retina display, blood-oxygen monitoring, ECG capability, and a sleek titanium case both elegant and durable.',
      highlights: [
        'Always-on Retina LTPO OLED display',
        'Blood oxygen & ECG monitoring',
        'IP68 water resistance — swim-proof',
        '7-day battery life with GPS tracking',
        '100+ workout modes with auto-detection'
      ],
      specs: {
        'Display': '1.9" LTPO OLED, 484×396',
        'Case Material': 'Grade 5 Titanium',
        'Water Resistance': 'IP68 / 5ATM',
        'Sensors': 'Heart rate, SpO2, ECG, Temp',
        'Battery': '7 days typical use',
        'Connectivity': 'BT 5.3, Wi-Fi, NFC, LTE (optional)',
        'OS': 'LumaOS 4.0'
      }
    },
    {
      id: 3,
      brand: 'STUDIO',
      name: 'Ergonomic Office Chair',
      price: 589.99,
      originalPrice: 799.99,
      rating: 4.7,
      reviews: 1456,
      image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=600&h=600&fit=crop',
      badge: 'Limited',
      discount: 26,
      category: 'Home & Living',
      description: 'Designed with your spine in mind. This premium ergonomic chair combines adaptive lumbar support, breathable mesh, and 14-point adjustability to keep you comfortable through the longest work days.',
      highlights: [
        'Adaptive lumbar support with auto-tension',
        'Breathable 3D-knit mesh backrest',
        '14-point adjustability including seat depth',
        'Aluminium base with smooth-rolling casters',
        '12-year warranty'
      ],
      specs: {
        'Seat Height': '40–52 cm (adjustable)',
        'Weight Capacity': '150 kg / 330 lbs',
        'Backrest': '3D-knit mesh, tilt 0–25°',
        'Armrests': '4D adjustable',
        'Base': 'Polished aluminium, 5-star',
        'Casters': 'Soft-roll, floor-safe',
        'Warranty': '12 years'
      }
    },
    {
      id: 4,
      brand: 'TECHFLOW',
      name: '4K Ultra HD Monitor 32"',
      price: 549.99,
      originalPrice: null,
      rating: 4.6,
      reviews: 892,
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=600&fit=crop',
      badge: null,
      discount: null,
      category: 'Electronics',
      description: 'A stunning 32-inch 4K IPS display with factory-calibrated colour accuracy, HDR600, and a 165 Hz refresh rate. Perfect for creative professionals and gamers alike.',
      highlights: [
        '32" 4K IPS — 3840×2160 @ 165 Hz',
        'HDR600 with local dimming',
        'Factory-calibrated ΔE < 1 for sRGB & DCI-P3',
        'USB-C 90 W power delivery',
        'Ergonomic stand with height, tilt, pivot'
      ],
      specs: {
        'Panel': 'IPS, 32", 3840×2160',
        'Refresh Rate': '165 Hz (adaptive sync)',
        'HDR': 'VESA DisplayHDR 600',
        'Colour': '98% DCI-P3, ΔE < 1',
        'Ports': '2× HDMI 2.1, 1× DP 1.4, 1× USB-C 90 W',
        'Response Time': '1 ms GtG',
        'Weight': '7.2 kg (without stand)'
      }
    },
    {
      id: 5,
      brand: 'ELEVATE',
      name: 'Mechanical Gaming Keyboard',
      price: 159.99,
      originalPrice: 199.99,
      rating: 4.8,
      reviews: 2134,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=600&fit=crop',
      badge: 'Best Seller',
      discount: 20,
      category: 'Electronics',
      description: 'A hot-swappable mechanical keyboard with per-key RGB, a premium aluminium frame, and a silky-smooth gasket mount that makes every keystroke satisfying.',
      highlights: [
        'Hot-swappable PCB — any MX-style switch',
        'Per-key RGB with 16.8 M colours',
        'Gasket-mount for a cushioned typing feel',
        'CNC aluminium top case',
        'PBT double-shot keycaps'
      ],
      specs: {
        'Layout': '75% (84 keys)',
        'Switch': 'Hot-swappable, MX-compatible',
        'Keycaps': 'PBT double-shot, Cherry profile',
        'Frame': 'CNC aluminium + polycarbonate',
        'Connection': 'USB-C, Bluetooth 5.1, 2.4 GHz',
        'Battery': '8 000 mAh — 200 hrs (no RGB)',
        'Software': 'VIA / QMK compatible'
      }
    },
    {
      id: 6,
      brand: 'ZENITH',
      name: 'Wireless Mouse Pro',
      price: 79.99,
      originalPrice: null,
      rating: 4.5,
      reviews: 1678,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&h=600&fit=crop',
      badge: 'Verified',
      discount: null,
      category: 'Electronics',
      description: 'Precision meets comfort. The Wireless Mouse Pro features a 26 000 DPI sensor, 70-hour battery, and an ergonomic shell sculpted for marathon sessions.',
      highlights: [
        '26 000 DPI optical sensor — zero smoothing',
        'Tri-mode: Bluetooth, 2.4 GHz, USB-C wired',
        '70-hour battery with quick charge',
        'Ergonomic shell — right-hand sculpted',
        '5 programmable buttons + scroll tilt'
      ],
      specs: {
        'Sensor': '26 000 DPI optical',
        'Buttons': '5 + tilt scroll',
        'Connection': 'BT 5.1 / 2.4 GHz / USB-C',
        'Battery': '70 hrs (2.4 GHz), 90 hrs (BT)',
        'Weight': '63 g (without dongle)',
        'Polling Rate': '1 000 Hz (2.4 GHz)',
        'Feet': '100% virgin PTFE'
      }
    }
  ];
  
  /* Categories for navigation filtering */
  const categories = ['Electronics', 'Fashion', 'Home & Living', 'Beauty', 'Sports'];