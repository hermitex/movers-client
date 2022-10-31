const data = [
  {
    id: "place.9939061",
    type: "Feature",
    place_type: ["place"],
    relevance: 1,
    properties: {
      wikidata: "Q589616",
    },
    text: "Thika",
    place_name: "Thika, Kiambu, Kenya",
    bbox: [36.97518158, -1.129788876, 37.421073914, -0.97339642],
    center: [37.08333, -1.05],
    geometry: {
      type: "Point",
      coordinates: [37.08333, -1.05],
    },
    context: [
      {
        id: "region.271477",
        short_code: "KE-13",
        wikidata: "Q2575594",
        text: "Kiambu",
      },
      {
        id: "country.8821",
        short_code: "ke",
        wikidata: "Q114",
        text: "Kenya",
      },
    ],
  },
  {
    id: "place.9922677",
    type: "Feature",
    place_type: ["place"],
    relevance: 1,
    properties: {},
    text: "Theta",
    place_name: "Theta, Kiambu, Kenya",
    bbox: [36.896854401, -1.121342182, 36.994796753, -1.049325824],
    center: [36.961718, -1.08524],
    geometry: {
      type: "Point",
      coordinates: [36.961718, -1.08524],
    },
    context: [
      {
        id: "region.271477",
        short_code: "KE-13",
        wikidata: "Q2575594",
        text: "Kiambu",
      },
      {
        id: "country.8821",
        short_code: "ke",
        wikidata: "Q114",
        text: "Kenya",
      },
    ],
  },
  {
    id: "place.9930869",
    type: "Feature",
    place_type: ["place"],
    relevance: 1,
    properties: {},
    text: "Thiba",
    place_name: "Thiba, Kirinyaga, Kenya",
    bbox: [37.294158936, -0.712511063, 37.359733582, -0.639837742],
    center: [37.35, -0.69],
    geometry: {
      type: "Point",
      coordinates: [37.35, -0.69],
    },
    context: [
      {
        id: "region.263285",
        short_code: "KE-15",
        wikidata: "Q2230311",
        text: "Kirinyaga",
      },
      {
        id: "country.8821",
        short_code: "ke",
        wikidata: "Q114",
        text: "Kenya",
      },
    ],
  },
  {
    id: "place.9914485",
    type: "Feature",
    place_type: ["place"],
    relevance: 1,
    properties: {},
    text: "Thegu River",
    place_name: "Thegu River, Nyeri, Kenya",
    bbox: [36.956939697, -0.396840781, 37.304534912, -0.146704629],
    center: [37.01, -0.3],
    geometry: {
      type: "Point",
      coordinates: [37.01, -0.3],
    },
    context: [
      {
        id: "region.361589",
        short_code: "KE-36",
        wikidata: "Q749665",
        text: "Nyeri",
      },
      {
        id: "country.8821",
        short_code: "ke",
        wikidata: "Q114",
        text: "Kenya",
      },
    ],
  },
  {
    id: "place.9947253",
    type: "Feature",
    place_type: ["place"],
    relevance: 1,
    properties: {},
    text: "Thingithu",
    place_name: "Thingithu, Laikipia, Kenya",
    bbox: [36.970756531, -0.04028007, 37.072050355, 0.098022811],
    center: [37.06, 0.04],
    geometry: {
      type: "Point",
      coordinates: [37.06, 0.04],
    },
    context: [
      {
        id: "region.197749",
        short_code: "KE-20",
        wikidata: "Q1800699",
        text: "Laikipia",
      },
      {
        id: "country.8821",
        short_code: "ke",
        wikidata: "Q114",
        text: "Kenya",
      },
    ],
  },
];

const target = data.find(
  (place) => place.place_name === "Theta, Kiambu, Kenya"
);

console.log(target.geometry.coordinates, target.place_name);
