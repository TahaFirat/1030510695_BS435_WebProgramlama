// Image data for the game
// In a real application, these would be actual image URLs

export const imageCategories = {
  portraits: [
    {
      id: 1,
      images: [
        { id: 1, url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400', isAI: false },
        { id: 2, url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', isAI: false },
        { id: 3, url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400', isAI: true }
      ],
      aiImageIndex: 2,
      hint: 'Yüz simetrisine ve göz detaylarına dikkat edin. AI üretimi görsellerde gözler bazen doğal olmayan bir parlaklığa sahip olabilir.',
      category: 'Portreler'
    },
    {
      id: 2,
      images: [
        { id: 4, url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', isAI: true },
        { id: 5, url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400', isAI: false },
        { id: 6, url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400', isAI: false }
      ],
      aiImageIndex: 0,
      hint: 'Saç tellerinin detaylarına bakın. AI bazen saç dokusunu tam olarak doğal oluşturamaz.',
      category: 'Portreler'
    },
    {
      id: 3,
      images: [
        { id: 7, url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400', isAI: false },
        { id: 8, url: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400', isAI: true },
        { id: 9, url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400', isAI: false }
      ],
      aiImageIndex: 1,
      hint: 'Cilt dokusuna ve pürüzsüzlüğüne dikkat edin. AI görsellerde cilt bazen aşırı pürüzsüz görünebilir.',
      category: 'Portreler'
    },
    {
      id: 4,
      images: [
        { id: 10, url: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400', isAI: false },
        { id: 11, url: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400', isAI: false },
        { id: 12, url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', isAI: true }
      ],
      aiImageIndex: 2,
      hint: 'Kulak detaylarına ve yüz hatlarının doğallığına bakın. AI bazen kulak yapısını hatalı oluşturabilir.',
      category: 'Portreler'
    },
    {
      id: 5,
      images: [
        { id: 13, url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400', isAI: true },
        { id: 14, url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400', isAI: false },
        { id: 15, url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400', isAI: false }
      ],
      aiImageIndex: 0,
      hint: 'Arka plan bulanıklığına ve derinlik hissine dikkat edin. AI bazen bokeh efektini yapay oluşturabilir.',
      category: 'Portreler'
    },
    {
      id: 6,
      images: [
        { id: 16, url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400', isAI: false },
        { id: 17, url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400', isAI: true },
        { id: 18, url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', isAI: false }
      ],
      aiImageIndex: 1,
      hint: 'Diş ve dudak detaylarına bakın. AI üretimi görsellerde dişler bazen çok beyaz veya düzensiz olabilir.',
      category: 'Portreler'
    }
  ],
  landscapes: [
    {
      id: 7,
      images: [
        { id: 19, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', isAI: false },
        { id: 20, url: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=400', isAI: true },
        { id: 21, url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400', isAI: false }
      ],
      aiImageIndex: 1,
      hint: 'Arka plan detaylarına ve perspektif tutarlılığına dikkat edin. AI görsellerde uzak nesneler bazen bulanık olabilir.',
      category: 'Manzaralar'
    },
    {
      id: 8,
      images: [
        { id: 22, url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400', isAI: false },
        { id: 23, url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400', isAI: false },
        { id: 24, url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400', isAI: true }
      ],
      aiImageIndex: 2,
      hint: 'Doğal ışık ve gölge geçişlerine bakın. AI bazen ışık kaynaklarını tutarsız şekilde yerleştirebilir.',
      category: 'Manzaralar'
    },
    {
      id: 9,
      images: [
        { id: 25, url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400', isAI: true },
        { id: 26, url: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=400', isAI: false },
        { id: 27, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', isAI: false }
      ],
      aiImageIndex: 0,
      hint: 'Su yansımalarına ve dalgaların doğallığına dikkat edin. AI bazen su yüzeyini gerçekçi oluşturamaz.',
      category: 'Manzaralar'
    },
    {
      id: 10,
      images: [
        { id: 28, url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400', isAI: false },
        { id: 29, url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400', isAI: true },
        { id: 30, url: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400', isAI: false }
      ],
      aiImageIndex: 1,
      hint: 'Ağaç yapraklarının detaylarına ve doğal dağılımına bakın. AI bazen yaprak dokularını tekrarlayan desenlerle oluşturur.',
      category: 'Manzaralar'
    },
    {
      id: 11,
      images: [
        { id: 31, url: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=400', isAI: false },
        { id: 32, url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400', isAI: false },
        { id: 33, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', isAI: true }
      ],
      aiImageIndex: 2,
      hint: 'Bulut formasyonlarına ve gökyüzü renklerine dikkat edin. AI bazen bulutları çok simetrik veya yapay oluşturabilir.',
      category: 'Manzaralar'
    },
    {
      id: 12,
      images: [
        { id: 34, url: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400', isAI: true },
        { id: 35, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', isAI: false },
        { id: 36, url: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400', isAI: false }
      ],
      aiImageIndex: 0,
      hint: 'Kaya ve taş dokularına bakın. AI üretimi görsellerde doğal erozyon izleri eksik olabilir.',
      category: 'Manzaralar'
    }
  ],
  art: [
    {
      id: 13,
      images: [
        { id: 37, url: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=400', isAI: true },
        { id: 38, url: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=400', isAI: false },
        { id: 39, url: 'https://images.unsplash.com/photo-1578301978162-7aae4d755744?w=400', isAI: false }
      ],
      aiImageIndex: 0,
      hint: 'Sanat eserlerinde fırça darbeleri ve doku detaylarına bakın. AI üretimi eserlerde tekrar eden desenler olabilir.',
      category: 'Sanat'
    },
    {
      id: 14,
      images: [
        { id: 40, url: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=400', isAI: false },
        { id: 41, url: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=400', isAI: true },
        { id: 42, url: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=400', isAI: false }
      ],
      aiImageIndex: 1,
      hint: 'Kompozisyon ve renk uyumuna dikkat edin. AI bazen renk geçişlerinde yapay bir mükemmellik yaratabilir.',
      category: 'Sanat'
    },
    {
      id: 15,
      images: [
        { id: 43, url: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=400', isAI: false },
        { id: 44, url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400', isAI: false },
        { id: 45, url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400', isAI: true }
      ],
      aiImageIndex: 2,
      hint: 'Boya katmanlarına ve derinlik hissine bakın. AI üretimi eserlerde fiziksel boya dokusu eksik olabilir.',
      category: 'Sanat'
    },
    {
      id: 16,
      images: [
        { id: 46, url: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400', isAI: true },
        { id: 47, url: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=400', isAI: false },
        { id: 48, url: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=400', isAI: false }
      ],
      aiImageIndex: 0,
      hint: 'Soyut sanat eserlerinde renk dağılımına ve organik formlara dikkat edin. AI bazen çok düzenli desenler oluşturur.',
      category: 'Sanat'
    },
    {
      id: 17,
      images: [
        { id: 49, url: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400', isAI: false },
        { id: 50, url: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=400', isAI: true },
        { id: 51, url: 'https://images.unsplash.com/photo-1582561833985-d0a1e8b7a7c9?w=400', isAI: false }
      ],
      aiImageIndex: 1,
      hint: 'Işık ve gölge oyunlarına bakın. AI bazen ışık kaynaklarını fizik kurallarına uymayan şekilde yerleştirir.',
      category: 'Sanat'
    },
    {
      id: 18,
      images: [
        { id: 52, url: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=400', isAI: false },
        { id: 53, url: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=400', isAI: false },
        { id: 54, url: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=400', isAI: true }
      ],
      aiImageIndex: 2,
      hint: 'Sanatçının imza ve fırça tekniğine dikkat edin. AI üretimi eserlerde tutarlı bir sanatçı tarzı olmayabilir.',
      category: 'Sanat'
    }
  ]
};

// Get a random round from a specific category
export const getRandomRoundByCategory = (category) => {
  const categoryData = imageCategories[category];
  if (!categoryData || categoryData.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * categoryData.length);
  return categoryData[randomIndex];
};

// Get a random round from all categories
export const getRandomRound = () => {
  const allCategories = Object.keys(imageCategories);
  const randomCategory = allCategories[Math.floor(Math.random() * allCategories.length)];
  return getRandomRoundByCategory(randomCategory);
};
