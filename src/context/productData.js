const items = [
  {
    fields: {
      id: 0,
      title: "google pixel - black",
      price: 10,
      company: "google",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: true,
      image: {
        fields: {
          file: {
            url: "product-0.png"
          }
        }
      }
    }
  },
  {
    fields: {
      id: 1,
      title: "samsung s7 - white",
      price: 20,
      company: "samsung",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,

      image: {
        fields: {
          file: {
            url: "product-1.png"
          }
        }
      }
    }
  },
  {
    fields: {
      id: 2,
      title: "htc 10 - black",
      price: 30,
      company: "htc",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,

      image: {
        fields: {
          file: {
            url: "product-2.png"
          }
        }
      }
    }
  },
  {
    fields: {
      id: 3,
      title: "htc 10 - white",
      price: 15,
      company: "htc",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,

      image: {
        fields: {
          file: {
            url: "product-3.png"
          }
        }
      }
    }
  },
  {
    fields: {
      id: 4,
      title: "samsung s7 - black",
      price: 45,
      company: "google",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,

      image: {
        fields: {
          file: {
            url: "product-4.png"
          }
        }
      }
    }
  },
  {
    fields: {
      id: 5,
      title: "samsung galaxy A8 - black",
      price: 55,
      company: "samsung",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,

      image: {
        fields: {
          file: {
            url: "product-5.png"
          }
        }
      }
    }
  },

  {
    fields: {
      id: 6,
      title: "fuji X100s photo camera",
      price: 90,
      company: "fuji",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: true,

      image: {
        fields: {
          file: {
            url: "product-6.png"
          }
        }
      }
    }
  },
  {
    fields: {
      id: 7,
      title: "canon Eos 30 photo camera",
      price: 120,
      company: "canon",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,

      image: {
        fields: {
          file: {
            url: "product-7.png"
          }
        }
      }
    }
  },
  {
    fields: {
      id: 8,
      title: "nikon D 3100 photo camera",
      price: 55,
      company: "nikon",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,

      image: {
        fields: {
          file: {
            url: "product-8.png"
          }
        }
      }
    }
  },
  {
    fields: {
      id: 9,
      title: "acer desktop computer",
      price: 35,
      company: "acer",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: true,

      image: {
        fields: {
          file: {
            url: "product-9.png"
          }
        }
      }
    }
  },
  {
    fields: {
      id: 10,
      title: "hp desktop computer",
      price: 75,
      company: "hp",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,

      image: {
        fields: {
          file: {
            url: "product-10.png"
          }
        }
      }
    }
  },
  {
    fields: {
      id: 11,
      title: "lenovo desktop computer",
      price: 110,
      company: "lenovo",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,
      image: {
        fields: {
          file: {
            url: "product-11.png"
          }
        }
      }
    }
  },
  {
    fields: {
      id: 12,
      title: "dell desktop computer",
      price: 28,
      company: "dell",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,
      image: {
        fields: {
          file: {
            url: "product-12.png"
          }
        }
      }
    }
  }
];

export default items;
